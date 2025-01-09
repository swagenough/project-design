import prisma from "../db"

const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.json({data: update})
}

const getUpdates = async (req,res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })

    const updates = (products).reduce((allUpdates, products) => {
        return [...allUpdates, ...products.updates]
    }, [])
}

const createUpdate = async (req,res) => {
    
}

const updateUpdates = async (req,res) => {
    
}

const deleteUpdate = async (req,res) => {
    
}