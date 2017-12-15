/* eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('src/index.html','utf8',(error, markup) => {
    if(error){
        return console.log(error);
    }

    const $ = cheerio.load(markup);

    // load bundled css file
    $('head').prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile('public/index.html', $.html(), 'utf8', function (error) {
        if(error){
            return console.log(error);
        }
        console.log("index.html build has completed successfully ");
    });

});