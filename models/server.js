import expreess from "express";
import 'dotenv/config';
import cors from 'cors'

 export class Server{
    constructor(){
        this.app = expreess();
        this.port =process.env.PORT || 30001;

        this.middlewares();
        this.routes();
    }
    //Segundo Metodo de mi Class Server.
    routes(){
        this.app.get('/api',(req, res) =>{
            res.json({
                msg:'GET - Server.'
            })
        });

        this.app.get('/api',(req, res) =>{
            res.json({
                msg:'POST - Server.'
            })
        });

        this.app.get('/api',(req, res) =>{
            res.json({
                msg:'PUT - Server.'
            })
        });

        this.app.get('/api',(req, res) =>{
            res.json({
                msg:'DELATE - Server.'
            })
        });
    }

    //metodo 3 de mi clase server
    middlewares(){
        this.app.use(cors());
        this.app.use(expreess.static('public'));
        this.app.use(expreess.json());
    }
    //Primer Metodo de mi Clase Server
    listen(){
        this.app.listen(this.port,() => {
            console.log(`Servidor corriemdo en el puerto : ${this.port}`);
        });
    }


}

export default Server; 