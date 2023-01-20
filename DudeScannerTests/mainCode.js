const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http')
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
var students = JSON.parse(fs.readFileSync('peoples.json'));
app.get('/', (req, res) => {
    res.render('DudeScanner', { ejsData: students });
});
app.post('/DudeScanner', (req, res) => {
    const { tooot } = req.body;
    console.log(tooot)
    fs.writeFileSync('peoples.json', JSON.stringify(students))
    res.render("DudeScanner", { ejsData: students, Here: tooot })
})
app.listen(3000,
    () => { console.log('server started') }
);