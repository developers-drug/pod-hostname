import express, { Request, Response } from 'express';
import os from 'os'

let app = express()

app.get('/',(req,res)=>{
    res.send(`The Hostname is : ${os.hostname}`)
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`)
})