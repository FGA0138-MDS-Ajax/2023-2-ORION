const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/Event');
const Comment = require('./models/Comment');
const User = require('./models/User');
const Admin = require('./models/Admin');

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, ()  =>{
    mongoose.connect('mongodb+srv://juaumz52:XMT7oB5Lo8vLsDUV@tentativas.5yujo4h.mongodb.net/?retryWrites=true&w=majority');
    console.log('App running');
});

//-------------------------------------------------------------
// Métodos de Event

// Retornar todos os comentários de um determinado evento (o id do evento é passado no link)
app.get('/:evento',(req, res) => {

    Comment.find({event: req.params.event})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Retornar a categoria do evento
app.get('/c/:id',(req, res) => {

    Event.findById(req.params.id)
        .then((result) => {
            res.send(result.category);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Get eventId não sabemos como nem porque fazer

// Retornar o evento através do seu id
app.get('/evento/:id',(req, res) => {

    Event.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Retorna todos os eventos
app.get('/', (req, res) => {

    Event.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.error(err);
    });
});


// Criar um evento
app.post('/criarEvento', (req, res) => {

    const event = new Event({

        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        participants: req.body.participants,
        creator: req.body.creator,
        category: req.body.category
    });

    event.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Atualizar um evento

app.put('/editarEvento/:id', async (req, res) => {

    const evento = await Event.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        participants: req.body.participants,
        creator: req.body.creator,
        category: req.body.category

    }, {new: true});

    return res.send(evento);
});

// Adicionar Participante 
app.put('/entrarEvento/:id', async (req, res) => {

    const evento = await Event.findByIdAndUpdate(req.params.id, {
        
        $push: {participants: req.body.participant}

    }, {new: true});

    return res.send(evento)
});

// Retirar Participante 
app.put('/sairEvento/:id', async (req, res) => {

    const evento = await Event.findByIdAndUpdate(req.params.id, {
        
        $pull: {participants: req.body.participant}

    }, {new: true});

    return res.send(evento)
});

// Deletar evento
app.delete('/evento/deletar/:id', async (req, res) => {

    const evento = await Event.findByIdAndDelete(req.params.id);
    return res.send(evento);

});

//----------------------------------------------------------------
// Metodos de Comments

// Postar comentário 
app.post('/comentar', (req, res) => {

    const comment = new Comment({

        commentId: req.body.commentId,
        event: req.body.event,
        user: req.body.user,
        likes: req.body.likes,
        text: req.body.text
    });

    comment.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Deletar comentário
app.delete('/comentario/:id', async(req, res) => {

    const comentario = await Comment.findOneAndDelete({user: req.body.user, _id: req.body._id});
    return res.send(comentario);

});

// Dar likes e deslikes parece fora do escopo

//--------------------------------------------------------
// Metodos de Users

// Retorna o usuário através do Id
app.get('/usr/:id', (req, res) => {

    User.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Retorna todos os usuários
app.get('/usr', (req, res) => {

    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

// Adicionar usuário
app.post('/usr', (req, res) => {
    const user = new User({

        name: req.body.name,
        alias: req.body.alias,
        email: req.body.email,
        password: req.body.password
    });

    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

//--------------------------------------------------------
// Metodos de Admin

app.post('/admin', (req, res) => {
    const admin = new Admin({
        name: req.body.name,
        password: req.body.password
    });
    admin.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
        });

})

//--------------------------------------------------------