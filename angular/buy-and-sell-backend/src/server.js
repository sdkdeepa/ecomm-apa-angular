import Hapi from '@hapi/hapi'
import routes from './routes'

const start = async() => {
    const server = Hapi.server({
        port:5000,
        host:'localhost',
    })

    // server.route({
    //     method: 'GET',
    //     path: '/hello',
    //     handler:(req, h) =>{
    //         return 'Hello!'
    //     }
    // })
    routes.forEach(route => server.route(route))
    
    await server.start()
    console.log(`server is listening on ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
    console.log(err)
    process.exit(1)
})
start()