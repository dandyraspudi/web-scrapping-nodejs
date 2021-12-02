const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const port = 3000;

const app = express()

const url = 'https://www.detik.com/'
axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const article = []

    $('.media__title', html).each(function() {
      const title = $(this).text()
      const urlTitle = $(this).find('a').attr('href')
      article.push({
        title,
        urlTitle
      })
    })

    console.log(article);
  })
  .catch(err => console.log(err))


app.listen(port, () => {
  console.log("listening port " + port);
})