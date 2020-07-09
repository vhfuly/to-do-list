const express = require('express');
const checklistRouter = require('./scr/routers/checklist');

const app =  express();

app.use(express.json());

app.use('/checklists',checklistRouter);



app.listen(3000, ()=>{
    console.log('Servidor foi iniciado')
})
