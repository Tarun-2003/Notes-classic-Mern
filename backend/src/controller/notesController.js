import Note from "../models/Note.js"

export async function getAllNotes(req,res){

    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(201).json(notes)

    }

    catch(error){
        console.log(error.message)
        res.status(501).json({
            message:"internal server error"
        })
    }
    }

export async function getNoteByID(req,res){
    try{

        const noteByID  = await Note.findById(req.params.id)

        if (!noteByID){
            res.status(404).json({
                message:"not found"
            })
        }

        res.status(201).json(noteByID)

    }
    catch(error){
        res.send(501).json({
            message:"internal server error"
        })

    }

}









export async function createAllNotes(req,res){
    try{
        const {title, content} = req.body
        const value = new Note({title:title, content:content} )

        await value.save()
        res.status(201).json(value)
        

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({
            message:"internal server error"
        })

    }
 
}

export async function updateAllNotes(req,res){

try{
    const {title, content} = req.body;
    const updated = await Note.findByIdAndUpdate(req.params.id, {
        title:title, content:content
    },{
        new:true
    } );

        if (!updated){
        res.status(404).json({
            message:"not found"
        })
    }

    res.status(201).json("updated successfully")


}
catch(error){

            console.log(error.message)
        res.status(500).json({
            message:"internal server error"
        })
}
 
}

export async function deleteAllNotes(req,res){
    try{

        const deleted  = await Note.findByIdAndDelete(req.params.id)

        if (!deleted){
            res.status(404).json({
                message:"not found"
            })
        }

        res.status(201).json("Deleted successfulyy")

    }
    catch(error){
        res.send(501).json({
            message:"internal server error"
        })

    }

}