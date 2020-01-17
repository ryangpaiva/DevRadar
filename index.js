const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-mcojw.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors())
app.use(express.json())
app.use(routes);

//get, post, put, delete

//tipos de parametro:
//Query Params: req.query (Filtros,ordenação, paginação,...) GET
//Route Params: request.params (Identificar um recurso na alteração ou remoção) DELETE ou PUT
//Body: request.body (Dados para criação ou alteração de um registro)


//MongoDB (Não-Relacional)



app.listen(3333);
