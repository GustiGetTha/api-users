const usersModel = require("../models/usersModel.js");

//Show All Users
const getAllUsers = async (req, res) => {
    //[rows, field]
    try {
        const [data] = await usersModel.getAllUsers();
        res.json({
            message: "GET All Users Success",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        });
    }
}

//Add User
const createUsers = async (req, res) => {
    // console.log(req.body);
    const {body} = req;

    if(!body.nama || !body.alamat){
        return res.status(400).json({
            message: "Mengirimkan Data yang Salah",
            data: null
        });
    }

    try {
        await usersModel.createUsers(body);    
        res.status(201).json({
            message: "CREATE Users Success",
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        });
    }
}

//Update User
const updateUsers = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    // console.log("id: ", id);

    try {
        await usersModel.updateUsers(body, id);
        res.json({
            message: "UPDATE Users Success",
            data: {
                id: id,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        });
    }
}

const deleteUsers = async (req, res) => {
    const {id} = req.params;
    try {
        await usersModel.deleteUsers(id);
        res.json({
            message: "DELETE Users Success",
            data: {
                id: id,
                data: null
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        });
    }
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}