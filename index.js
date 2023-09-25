const puppeeter=require("puppeteer")
console.log("Before");

const browserOpen=puppeeter.launch({headless: false})
browserOpen.then(
    function(browser){
        console.log("Browser Open")
    }
)