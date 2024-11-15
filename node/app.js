// const express = require('express');
// const app = express();

// app.get('/', (req,res)=> res.send('Hello !'));


// app.get('/',(req, res)=> res.send('hi'))
// app.post('/',(req, res)=> {/*  */})
// app.put('/',(req, res)=> {/*  */})
// app.delete('/',(req, res)=> {/*  */})
// app.patch('/',(req, res)=> {/*  */})

// app.listen(3000, () => console.log('server ready'));


// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();
// app.get('/', (req, res) => res.send('Hello express'))

// app.use(cookieParser())
// app.listen(3000, () => console.log('Server ready'));


const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cookieParser())
app.listen(3000, () => console.log('Server ready'))