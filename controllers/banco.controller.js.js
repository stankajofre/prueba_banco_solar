import { bancoModel } from "../models/banco.model.js"

export const getAllUsers = async (req, res) => {
    console.log(req.query)
    const users = await bancoModel.findAll()
    console.log(users)

}

try {
    const users = await bancoModel.getUsers()
    return res.json(users)
} catch (error) {

    res.status(500).json({ error: 'Error interno del servidor' })

}

export const getUser = async (req, res) => {
    console.log(req.params)
    res.send('Hello World!')

    try {
        const { nombre, balance } = req.body
        const nuevo = await bancoModel.register(nombre, balance)
        return res.json(nuevo)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
}


export const createUser = async (req, res) => {
    console.log(req.params)
    res.send('Hello World!')
}
try {
    const { id } = req.params
    const { nombre, balance } = req.body
    const editar = await bancoModel.update(id, nombre, balance)
    return res.json(editar)
} catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor' })

}

export const removeUser = async (req, res) => {
    console.log(req.params)
    res.send('Hello World!')
}
try {
    const { id } = req.params
    const remove = await bancoModel.remove(id)
    res.json(remove)

} catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error interno del servidor' })
}

export const updateUser = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send('Hello World!')
}
try {
    const { id } = req.params
    const remove = await bancoModel.remove(id)
    res.json(remove)

} catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error interno del servidor' })
}


export const bancoController = {
    getAllUsers,
    getUser,
    createUser,
    removeUser,
    updateUser,
}