let express=require("express")
let path=require("path")
let fs= require("fs")
let app=express()
port=80;
app.use(express.urlencoded())
app.use('static',express.static('static'))

// adding pug files
app.set("view engine", "pug")
app.set('views', './views');
app.use("/views",express.static(path.join(__dirname,"views")));
// app.use("/views", express.static(path.join(__dirname, 'views')));


app.get("/",(req,res)=>{
    res.render("index.pug")
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

