    import {semaforo, DiaSemana, Par, Fatorial} from "./service.js"
    import { Router } from 'express' 
    const server = Router ()


    server.get('/semaforo/:cor', (req, resp) =>{

        let cor= (req.params.cor);
        let a= semaforo(cor)
        resp.send({
            "a":a
        })

    })

    server.get ('/diasemana', (req, resp) =>{
        let {dia}= req.query
        let b= DiaSemana (dia)
        resp.send({
            "b":b
        })
    })



    server.post('/fatorial', (req, resp) => {
        let {fatorial}= req.query
        let n= Fatorial (numero)
        resp.send({
            "d":n
        })
    })

    server.post ('/sequenciapar', (req, resp) => {

        try{
        const {a} = req.body
        const x= Par (a)
        resp.send({
            "a":x
        })
        }  

        catch (err){

            resp.send({
                erro: err.message
            })
        }

    })
    
export default server; 
