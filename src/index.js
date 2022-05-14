const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
//import thu vien


const app = express()
//tao mot bien app gan ==
//goi lai ham express --> duoc tao san trong thu vien

const port = 7080
//khoi tao cong localhost

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))
//hien thi log de biet resquest len server ntn ?

//template engine
//app dang su dung engine la handlebars
app.engine('hbs', engine(
  {
    extname: '.hbs'
  }
));
//set ungdung express su dung view engine la handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})