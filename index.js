const express = require("express"); //importa o modulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Site criado com sucesso!</h1>");
})

//rota do cadastro de produtos
app.get("/itens", function(req,res){
    res.send("<h1>Lista de Itens!</h1>");
})

//rota com parametro 
app.get("/login/:filtro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno login:" + req.params.filtro);
})

app.listen(process.env.PORT ?? 8888,function(erro){  
    if (erro){
        console.log("Erro.");
    }else{
        console.log("Servidor Ativado.");
    }
})
