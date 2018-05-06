const express = require('express')
const app = express()

module.exports = {
  runServer: function () {
    app.use(express.static(`${__dirname}/client/dist`))
    app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
    app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
    app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
    app.use('/css', express.static(__dirname + '/client/src/components')); // redirect custom CSS
    app.get('/', (req, res) => res.render('index.html'))
    app.listen(3000, () => console.log('Listening on port 3000...'))
  }
}
