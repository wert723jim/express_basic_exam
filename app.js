const express = require('express')
const app = express()

const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index', {title: '首頁'})
})

app.get('/:title', (req, res) => {
  res.render('index', {title: req.params.title})
})

app.listen(port, () => {
  console.log(`listening ${port}`)
})