const Express = require("express");
const bodyParser = require("body-parser");
const app = Express();
const port = 3000;

var date = new Date();
var today = date.toLocaleDateString("en-US",{weekday:'long',year:'numeric',month:'long',day:'numeric'});
var tasks = []

app.use(Express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});

app.get('/',(req,res)=>{
    res.render("index.ejs",{date:today})
})

app.post('/add',(req,res)=>{
    let task = req.body.task
    tasks.push(task)
    res.render('index.ejs',{date:today,data:tasks})
})
