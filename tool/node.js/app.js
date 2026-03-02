const express = require('express');
const app = express();

app.use(express.text({ type: "*/*" }));

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.post('/message', (req, res) => {
    const receivedString = req.body;
    console.log('Received string:', receivedString);
    res.send('String received: ' + receivedString);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});