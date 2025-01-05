async function solveAoC(event, year, day) {
    const part = event.submitter.getAttribute('data-part')
    const inputFile = document.getElementById("input-file").value;
    const responseOutput = document.getElementById("output-response-" + part);
    responseOutput.value = "";

    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        responseOutput.value = "Solving" + ".".repeat(dots);
    }, 500);

    const data = {
        year: year,
        day: day,
        part: part,
        input_file: inputFile
    };

    const apiUrl = "https://aoc-webserver.onrender.com/solve";
    try {
        responseOutput.classList.remove('!text-positive-light', 'dark:!text-positive-dark');
        responseOutput.classList.remove('!text-negative-light', 'dark:!text-negative-dark');
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData["error"] || "Unknown error";
            throw new Error(errorMessage);
        }
        const result = await response.json();
        clearInterval(loadingInterval);
        responseOutput.classList.add('!text-positive-light', 'dark:!text-positive-dark');
        responseOutput.classList.remove('!text-negative-light', 'dark:!text-negative-dark');
        responseOutput.value = result["output"].split("\n").slice(-2).join("\n");
    } catch (error) {
        clearInterval(loadingInterval);
        responseOutput.classList.remove('!text-positive-light', 'dark:!text-positive-dark');
        responseOutput.classList.add('!text-negative-light', 'dark:!text-negative-dark');
        responseOutput.value = error.message;
    }
}

