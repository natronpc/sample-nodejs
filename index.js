const xhr = new XMLHttpRequest();
/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/server', (req, res) => {
    document.getElementById('test').innerText = `${req.body}`;
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/
var form = document.querySelector('.message-form')
form.addEventListener('submit', auth);
function auth() {
    var in1 = document.querySelector('.message-form__input1')
    var in2 = document.querySelector('.message-form__input2')
    xhr.open('POST', '/server', true);
    xhr.setRequestHeader('Content-Type', 'text')
    xhr.send(`${in1.value}/${in2.value}`)
}