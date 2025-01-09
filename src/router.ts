import {Router} from "express"
import { body, validationResult, oneOf } from "express-validator"
import { handleInputErrors } from "./modules/middleware"
import { getOneProduct, getProducts, createProduct, updateProduct, deleteProduct } from "./handlers/product"


const router = Router()

/** 
 * Product
 */

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct)
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

/** 
 * Update
 */

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', 
    body('title').optional,
    body('body').optional, 
    body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']), 
    body('version').optional, 
    (req, res) => {}
)
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(),  
    () => {}
)
router.delete('/update/:id', () => {})

/** 
 * Update Points
 */

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', 
    body('name').optional().isString(), 
    body('description').optional().isString(), 
    () => {}
)
router.post('/updatepoint', 
    body('name').exists().isString(), 
    body('description').exists().isString(), 
    body('updateId').exists().isString,
    () => {}
)
router.delete('/updatepoint/:id', () => {})

export default router