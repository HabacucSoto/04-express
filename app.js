const express = require( 'express' )
const app = express()
const port = 3000

app.get( '/', ( req, res ) => {
    res.send( 'hello world' )
} )

app.get( '/launchx', ( req, res ) => {
    res.send( 'bienvenido a launchx' )
} )

app.get( '/explorers', ( req, res ) => {
    const explorer = { name: 'explorer', msg: 'hello' }
    res.send( explorer )
} )

// ! Aplicando query params
app.get( '/explorers/:explorerName', ( req, res ) => {
    // ! Los params se encuentran en req (request)
    res.send( req.params ) // ? out: explorerName: 'val de la ruta'
} )

app.listen( port, () => console.log(`server: ${ port }`) ) 