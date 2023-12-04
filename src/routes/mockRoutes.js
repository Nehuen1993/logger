import { Router } from "express"
import { generateMock } from '../utils.js'

const router = Router()

router.get ('/', (req, res) => {
    let mock = []
    for (let i = 0; i < 5 ; i++) {
        mock.push(generateMock())
    }
    req.logger.info("logger info mock")  
    res.send({status: "success", payload: mock})
})

export default router