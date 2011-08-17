// enginimation.com
// (c) 2011 Enginimation Studio (http://enginimation.com).
var express = require('express'),
    rootApp = express.createServer();

rootApp.configure(function(){
    //app.use(connect.favicon(__dirname + '/public/16.png'));
    //logger
    rootApp.use(express.logger());
    //router
    rootApp.use(app.router);
    //public folder for static files
    rootApp.use(express.static(__dirname+'/public'));

});

//catch all errors
process.on('uncaughtException',function(err){
  util.log(err);
});
//main app for serving all these simple apps
var app = express.createServer();
app.use(express.vhost('doublepick.enginimation.com',require('../doublepick/app').app));
app.use(express.vhost('photospot.enginimation.com',require('../10diff/app').app));
app.use(express.vhost('player.enginimation.com',require('../m.player/app').app));
app.use(express.vhost('subtitler.enginimation.com',require('../subtitler/app').app));
app.use(express.vhost('dropcut.enginimation.com',require('../dropcut/app').app));
app.use(express.vhost('symboled.enginimation.com',require('../symboled/app').app));
app.use(express.vhost('enginimation.com',rootApp));
app.listen(80);

util.log('started server.');