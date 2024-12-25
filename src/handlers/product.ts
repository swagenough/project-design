import prisma from '../db'

/// Get all product
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            Product: true
        }
    })

    res.json({data: user.Product})
}

export const getOneProduct = async (req, res) => {
    const id = req.params.id
    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    })


    res.json({data: product})
}

export const createProduct = async (req, res) => {
    const proudct = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({data: proudct})
}

export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id: req.params.id,
            belongsToId: req.user.id
        },
        data: {
            name: req.body.name
        }
    })

    res.json({data: updated})
}

export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id: req.params.id,
            belongsToId: req.user.id
        }
    })

    req.json({data: deleted})
}