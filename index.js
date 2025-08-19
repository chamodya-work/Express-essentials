import express from 'express';
import data from './data/mock.json' with { type: 'json' };

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
    console.log(data)
});

app.get('/', (req, res) => {
    res.json(data);
});

app.post('/create', (req, res) => {
    res.send('this is post request at /');
});

app.put('/edit', (req, res) => {
    res.send('this is put request at /');
});

app.delete('/delete', (req, res) => {
    res.send('this is delete request at /');
});