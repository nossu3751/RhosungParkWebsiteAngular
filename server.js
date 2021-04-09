import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Server Running.");
});

app.listen(PORT, ()=>{
    console.log(`Server Running On Port ${PORT}.`);
});