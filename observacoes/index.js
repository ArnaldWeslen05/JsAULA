const express = require('express');
const {v4: uuidv4} =require('uuid')
const app = express();
const observacoesPorlembreteId = {}


app.use(bodyParse.json());

app.post('/lembretes/:id/observacoes', (req,res) => {
    const idDbs = uuidv4();
    const {texto } = req.body;
})

app.get('/lembretes/:id/observacoes', (req,res) => {

})

app.listen(5000, () => {
    console.log('observações. porta 5000');
})