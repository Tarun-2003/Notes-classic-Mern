import express from "express"
import { getAllNotes,createAllNotes,updateAllNotes,deleteAllNotes, getNoteByID } from "../controller/notesController.js";
const router = express.Router();


router.get("/", getAllNotes)

router.get("/:id", getNoteByID)

router.post("/",createAllNotes)

router.put("/:id", updateAllNotes)

router.delete("/:id",deleteAllNotes)

export default router;