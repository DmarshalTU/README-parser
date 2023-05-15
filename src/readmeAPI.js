const
    executors = require("./executors"),
    fs = require("fs");

function parse(req, res, next) {
    let 
        url = req.body.url,
        timestamp = new Date().getTime();

        
        url = url.replace(".git", "/main/README.md");
        url = url.replace("https://github.com", "https://raw.githubusercontent.com")

        let command = `curl ${url} > ${timestamp}.md`;
        console.log(command)

        executors.executeCommandSync(command).then(readme => {
            fs.readFile(`${timestamp}.md`, "utf8", (e, data) => {
                if(e) {
                    throw(e);
                }
                res.send(data)
            })
        }).catch(e => {
            console.log(e)
        });
}

function index(req, res, next) {

        fs.readFile('.well-known/ai-plugin.json', "utf8", (e, data) => {
            if(e) {
                throw(e);
            }
            res.send(data)
        })
}

module.exports = {
    parse,
    index
}