/**
 * Created by jorten on 16/8/29.
 */
var express = require('express'),
    app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/baoming', (req, res) => {
    res.render('baoming')
})

app.listen(3000, () => {
    console.log('server start on port 3000');
})