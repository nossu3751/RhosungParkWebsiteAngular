const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const router = express.Router;

app.use(express.static(path.join(__dirname, 'dist/rhosung-website')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/rhosung-website/index.html'));
})

app.get('/', (req,res)=>{
    res.send("Server Running.");
});

app.listen(PORT, ()=>{
    console.log(`Server Running On Port ${PORT}.`);
});