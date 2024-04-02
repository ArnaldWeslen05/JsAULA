const express = require('express');
const app = express();
const observacoesPorlembreteId = {}

app.use(bodyParse.json());

app.post('/lembretes/:id/observacoes', (req,res) => {

})

app.get('/lembretes/:id/observacoes', (req,res) => {

})

app.listen(5000, () => {
    console.log('observações. porta 5000');
})