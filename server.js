import express, {urlencoded} from 'express'

import cors from 'cors'

import client from './src/common/db.js'

import actorRoutes from './src/actor/actorRoutes.js'
import peliculaRoutes from './src/pelicula/peliculaRoutes.js'

const PORTS = 3000 || 4000
const app = express()

// middlewares
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(cors())

// ruta por defecto
app.all('/', (req, res) => {return res.status(200).send('Bienvenido al cine Iplacex')})

app.use('/api', peliculaRoutes)
app.use('/api', actorRoutes)

// Está fallando la conexión 
await client.connect()
.then(() => {
    console.log('Conexión exitosa al clúster')
    // Se conecta cuando todo es correcto
    app.listen(PORTS, () => {console.log(`Servidor corriendo en http://localhost:${PORTS}`)})
})
.catch(() => {
    console.log('Ha ocurrido un error al intentar conectarse al clúster')
})

