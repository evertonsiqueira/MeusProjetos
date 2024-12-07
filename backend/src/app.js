import express from "express"
import conectDataBase from "./config/dbconnect.js";
import mongoose from "mongoose";

// conectando com a função para conectar com a database:
const conexao = await conectDataBase();
conexao.on("error", (erro) =>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("conexão com o banco feita com sucesso");
});

const app = express ();
app.use(express.json())


const opcao = [
    {
        id:1,
        opcao:"Omelete",
        descricao:"blalsllsalslallslall"
    },
    {
        id:2,
        opcao:"Omelete",
        descricao:"blalsllsalslallslall"
    },
    {
        id:3,
        opcao:"Omelete",
        descricao:"blalsllsalslallslall"
    }
    
]

function buscaOpcao(id){
    return opcao.findIndex(opcoes =>{
        return opcoes.id === Number(id)
    });
};
// testando a rota base
app.get("/", (req, res) => {
    res.status(200).send("Rota_Home");
});
// pegando informações que estão no array opcao
app.get("/opcao", (req,res) =>{
    res.status(200).json(opcao);

// Inserindo informações no array.
});
app.post("/opcao", (req,res) =>{
opcao.push(req.body);
res.status(201).send("Opção inserida com sucesso");

});
//buscando opcao por id
app.get("/opcao/:id", (req,res) =>{
    const index = buscaOpcao(req.params.id);
    res.status(201).json(opcao[index]);
});
// alterando informações
app.put("/opcao/:id",(req,res) =>{
    const index = buscaOpcao(req.params.id);
    opcao[index].descricao = req.body.descricao;//
    res.status(200).json(opcao)
})
// excluindo informações
app.delete("/opcao/:id",(req, res)=>{
    const index = buscaOpcao(req.params.id);
    opcao.splice(index, 1);
    res.status(200).send("Opcao Removida com sucesso");

})


export default app;