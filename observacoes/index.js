const express = require('express');
const {v4: uuidv4} =require('uuid')
const app = express();
const observacoesPorlembreteId = {}


app.use(bodyParse.json());

app.post('/lembretes/:id/observacoes', (req,res) => {
    const idDbs = uuidv4();
    const {texto } = req.body;
    const observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({id: idObs, texto});
    observacoesPorlembreteId[req.params.id]= observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
    
});

app.get('/lembretes/:id/observacoes', (req,res) => {
   res.send(observacoesPorlembreteId[req.params
.id] || [])
})

app.listen(5000, () => {
    console.log('observações. porta 5000');
})