var express=require("express")
var Sequelize=require("sequelize")

var sequelize = new Sequelize('mydb','root','',{
    dialect:'mysql',
    host:'localhost',
    define:{
        freezeTableName:true,
        timestamps:false
    }
})

var app=express()

sequelize.authenticate().then(function(){
    console.log('Succes')
})

var Utilizator= sequelize.define('Utilizator',{
    NumeUtilizator:Sequelize.STRING,
    MailUtilizator:Sequelize.STRING,
    VarstaUtilizator:Sequelize.INTEGER
})

var Categorie=sequelize.define('Categorie',{
    NumeCategorie:Sequelize.STRING,
    NumarDocumente:Sequelize.INTEGER,
    Descriere:Sequelize.STRING
})

var Document=sequelize.define('Document',{
    NumeDocument:Sequelize.STRING,
    SpatiuOcupat:Sequelize.INTEGER,
    Utilizator_idUtilizator:Sequelize.INTEGER,
    Categorie_idCategorie:Sequelize.INTEGER
})

Document.belongsTo(Utilizator,{foreignKey:'Utilizator_idUtilizator',targetKey:'id'})

Document.belongsTo(Categorie,{foreignKey:'Categorie_idCategorie',targetKey:'id'})


app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded());

app.get('/utilizator',function(request,response){
    Utilizator.findAll().then(function(utilizator){
        response.status(200).send(utilizator)
    })
})

app.get('/utilizator/:id',function(req,res){
    Utilizator.findOne({where: {id:req.params.id}}).then(function(utilizator){
        if(utilizator){
            res.status(200).send(utilizator)
        }else{
            res.status(404).send("Not found")
        }
    })
})

app.put('/utilizator/:idUtilizator',function(request,response){
    Utilizator.findById(request.params.idUtilizator).then(function(utilizator){
        if(utilizator){
            utilizator.update(request.body).then(function(utilizator){
                response.status(201).send(utilizator)
            }).catch(function(error){
                response.status(200).send(error)
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})

app.delete('/utilizator/:idUtilizator',function(request,response){
    Utilizator.findById(request.params.idUtilizator).then(function(utilizator){
        if(utilizator){
            utilizator.destroy().then(function(){
                response.status(204).send()
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})
app.post('/utilizator',function(req,res){
    Utilizator.create(req.body).then(function(utilizator){
        res.status(201).send(utilizator)
    })
})

app.get('/categorie',function(request,response){
    Categorie.findAll().then(function(categorie){
        response.status(200).send(categorie)
    })
})

app.get('/categorie/:id',function(req,res){
    Categorie.findOne({where: {id:req.params.id}}).then(function(categorie){
        if(categorie){
            res.status(200).send(categorie)
        }else{
            res.status(404).send("Not found")
        }
    })
}) 

app.put('/categorie/:idCategorie',function(request,response){
    Categorie.findById(request.params.idCategorie).then(function(categorie){
        if(categorie){
            categorie.update(request.body).then(function(categorie){
                response.status(201).send(categorie)
            }).catch(function(error){
                response.status(200).send(error)
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})

app.delete('/categorie/:idCategorie',function(request,response){
    Categorie.findById(request.params.idCategorie).then(function(categorie){
        if(categorie){
            categorie.destroy().then(function(){
                response.status(204).send()
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})

app.post('/categorie',function(req,res){
    Categorie.create(req.body).then(function(categorie){
        res.status(201).send(categorie)
    })
})

app.get('/documente',function(request,response){
    Document.findAll().then(function(documente){
        response.status(200).send(documente)
    })
})

app.get('/documente/:id',function(req,res){
    Document.findOne({where: {id:req.params.id}}).then(function(documente){
        if(documente){
            res.status(200).send(documente)
        }else{
            res.status(404).send("Not found")
        }
    })
}) 

app.put('/documente/:idDocument',function(request,response){
    Document.findById(request.params.idDocument).then(function(documente){
        if(documente){
            documente.update(request.body).then(function(documente){
                response.status(201).send(documente)
            }).catch(function(error){
                response.status(200).send(error)
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})

app.delete('/documente/:idDocument',function(request,response){
    Document.findById(request.params.idDocument).then(function(documente){
        if(documente){
            documente.destroy().then(function(){
                response.status(204).send()
            })
        }else{
            response.status(404).send('Not found')
        }
    })
})

app.post('/document',function(req,res){
    Document.create(req.body).then(function(documente){
        res.status(201).send(documente)
    })
})

app.listen(8080)


















