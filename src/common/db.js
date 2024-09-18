// debe generar el cliente de conexión a la base de datos. Se debe considerar la configuración de conexión correspondiente. Además, se debe utilizar el clúster nombrado con anterioridad
import { MongoClient, ServerApiVersion } from "mongodb";

// la conexión se ha revisado varias veces
const uri = 'mongodb+srv://eva3_express:wZbqxqXNX30xOiLk@cluster-express.icsu2.mongodb.net/?retryWrites=true&w=majority&appName=cluster-express'
const client =  new MongoClient(uri, {
    serverApi:{
        // Requerida
        // Especifica la versión de stable API de mongoDB
        version: ServerApiVersion.v1,
        // Genera lanzamiento de excepciones cuando un comando no es parte de la versión
        strict: true,
        // Permite generar excepciones cuando un comando es deprecated
        deprecationErrors: true,
    }
})

export default client

// wZbqxqXNX30xOiLk