import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { competionRouter } from './router/competion.routes'
import { playerRouter } from './router/player.routes'
import { cadPlayerCompetionRouter } from './router/cadPlayerCompetion.routes'
import { rankingRouter } from './router/ranking.routes'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
app.use("/ranking", rankingRouter)
app.use("/competion", competionRouter)
app.use("/player", playerRouter)
app.use("/cad", cadPlayerCompetionRouter)


