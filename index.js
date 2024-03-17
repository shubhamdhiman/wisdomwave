import express from 'experss'
const app = express()
const port = 3000;
app.listen(port, (req,res)=>{
    console.log("listening on port: ",port)
})