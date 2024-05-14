import { transferenciaModel } from "../models/transferencia.model.js"


const allTransfers = async (req, res) => {
    try {
        const users = await transferenciaModel.getTransfers()
        return res.json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error del servidor' })

    }
}

const newTransfer = async (req, res) => {
    try {
        const { emisor, receptor, monto } = req.body
        const transfer = await transferenciaModel.transfer(emisor, receptor, monto)
        return res.json(transfer)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error del servidor' })
    }
}

export const transferenciaController = {
    allTransfers,
    newTransfer
}