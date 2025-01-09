import prisma from '../db'

/// Get all product
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })

    res.json({data: user.products})
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
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({data: product})
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
    try { 
        const deleted = await prisma.product.delete({ 
            where: { 
                belongsToId: req.user.id, 
                id: req.params.id 
            } 
        }) 
        res.status(200)
        res.json({data: deleted}) 
    } catch (error) { 
        console.log(error) 
        res.status(403) 
        res.json({error: error}) 
    } 
}