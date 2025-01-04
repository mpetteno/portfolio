async function solveAoC(year, day, part) {
    const inputFile = document.getElementById("inputFile").value;
    const responseOutput = document.getElementById("responseOutput");
    responseOutput.value = "";

    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        responseOutput.value = "Loading" + ".".repeat(dots);
    }, 500);

    const data = {
        year: year,
        day: day,
        part: part,
        input_file: inputFile
    };

    const apiUrl = "https://aoc-webserver.onrender.com/solve";
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Failed to submit");
        }
        const result = await response.json();
        clearInterval(loadingInterval);
        responseOutput.value = result["output"].split("\n").slice(-2).join("\n");
    } catch (error) {
        clearInterval(loadingInterval);
        responseOutput.value = "Error: " + error.message;
    }
}

