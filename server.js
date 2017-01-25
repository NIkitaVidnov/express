var express = require('express');
 var app = express();

app.get('/',function(reg, res){//Что будет происходить при  входе через браузер сервер (localhost:3012)
    res.send('Hello API');
})

app.listen(3010, function(){ //Назначаем порт
    console.log('API app started'); // Что выведется в консоли при запуске сервера
})
 