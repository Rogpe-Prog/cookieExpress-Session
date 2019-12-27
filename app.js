const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')

app.use(session({
    secret: 'aloha',
    cookie:{
        maxAge: 5000
    },
    resave: true,
    saveUninitialized: true
}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    sess = req.session
    res.render('index', {sess})
})

app.listen(3000, () => console.log('online...'))