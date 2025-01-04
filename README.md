# portfolio
Repository for personal portfolio

NOTES
- You can avoid to build pages using Front Matter and setting to \[_build] render = 'never'
- If you set \[cascade._build] render = 'never' too, also child pages won0t be built
- You can specify the HTML layout for a page by setting layout = '\[layout_name]' in Front Matter
- This is the only way to disable other than home pages access and it should be used when setting singlePage = true
- If you do not use this approach and use singlePage = True links in the menu will point to the home page sections 
when you are in non-home pages

TODO
- [ ] add italian content
- [ ] [integration with Quarto](https://quarto.org/docs/output-formats/hugo.html)
