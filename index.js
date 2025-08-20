import express from 'express';
import data from './data/mock.json' with { type: 'json' };

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
    // console.log(data)
});

// route of route in the application
app.get('/', (req, res) => {
    res.json(data);
});

//GET with next()
app.get('/next', (req, res,next) => {
    console.log('this response send by the next function');
    next();
},
(req, res) => {
    res.send('this is  route with  second callback function');
})

//GET - download method
app.get('/download', (req, res) => {
    res.download("images/mountains_2.jpeg")
});

//GET - redirect method
app.get('/redirect', (req, res) => {
    res.redirect("https://www.youtube.com/")
});

// Route with a parameter 
app.get('/class/:id', (req, res) => {
    const studentId =Number(req.params.id);
    const student=data.filter((student)=>
        student.id===studentId
    )
    console.log(student);
    res.send(student);

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