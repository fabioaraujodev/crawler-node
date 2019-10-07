var request = require('./node_modules/request');
var cheerio = require('cheerio');

request('https://www.google.com/search?q=eventos+rio+de+janeiro&ie=utf-8&oe=utf-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwiGpduP74jlAhW0G7kGHV1_CHEQ5rwDKAF6BAgUEAs#fpstate=tldetail&htidocid=c5F_M-bzusQrhHh1JpA8-A%3D%3D&htivrt=events', function(err,res,body) {
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('.lister-list div').each(function(){

        var title = $(this).find('.BjJfJf gsrt').text().trim();
        
        console.log('Titulo: ' + title);

    })

});