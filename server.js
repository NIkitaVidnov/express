var express = require('express');
 var app = express();
 var artist =[
     {
         id:1,
         name:'Metallica'
     },
     {
         id :2,
         name:'tech9'
     },
     {
         id:3,
         name:'wekeend'
     }
 ];

app.get('/',function(reg, res){//Что будет происходить при  входе через браузер сервер (localhost:3012)
    res.send('Hello API');
})

app.get('/artist',function(reg,res){
    res.send(artist);
})
app.get('/artist/:id',function(reg,res){
    console.log(reg.params);
    var artists=artist.find(function(artists){
        return artists.id ===Number(reg.params.id)
    });
    res.send(artists);
})

app.listen(3010, function(){ //Назначаем порт
    console.log('API app started'); // Что выведется в консоли при запуске сервера
})
 