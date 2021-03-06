const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Enable access to form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', function (req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / Math.pow(height, 2);
    res.send('Your BMI is ' + bmi);
});

app.listen(3000, function () {
    console.log('Server started on port 3000.')
});