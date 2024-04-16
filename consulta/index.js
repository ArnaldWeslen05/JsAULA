const express = require("express");
const app = express();
app.use(express.json());
const baseconsulta = {};


app.get("/lembretes", (req, res)=>{

})

app.post("/eventos", (req, res)=>{

})
app.listen(6000, () => {
    console.log("consulta. Porta 6000");
})