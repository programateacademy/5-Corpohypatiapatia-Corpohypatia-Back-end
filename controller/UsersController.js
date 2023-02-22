import UserModel from "../schema/usersSchema.js"


//view all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

//View one user
export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.findById({_id:id}).then( (user)=>{
            res.status(200).json(user)
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Create user
export const createUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.status(200).json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Update user
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.updateOne({_id:id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.deleteOne({ _id : id }).then( res =>{
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Registro borrado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}