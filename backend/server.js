import express from "express";

const app = express()

app.get("/api/notes", (req,res)=>{
res.status(200).send("hello")
})

app.post("/api/notes", (req,res)=>{
res.status(201).json({ 
    message:"notes created"})
})

app.put("/api/notes:id", (req,res)=>{
res.status(200).json({ 
    message:"notes updated"})
})
app.delete("/api/notes:id", (req,res)=>{
res.status(200).json({ 
    message:"notes deleted"})
})



app.listen("3000", ()=>{
    console.log("listening on port 3000")
})


