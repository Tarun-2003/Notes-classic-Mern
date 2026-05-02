import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/DB.js";

dotenv.config({ quiet: true })

// console.log(process.env.MONGO_URI)

const app = express()
connectDB()

//middlewares
app.use(express.json())

app.use("/api/notes", notesRoutes)


app.listen("3000", () =>{
    console.log("listening on port 3000")
})

// mongodb+srv://tarunindira2003_db_user:ijThUf4Gmzi2SsQg@cluster0.z3xopfw.mongodb.net/?appName=Cluster0
