// let num = 5
// console.log(`Variable: ${num}`)


// --------------------------------------------------------------------------
// npm install -g cowsay
// npm uninstall -g cowsay
// npm install currency-converter-lt

// >> code 
/*
const cc = require('currency-converter-lt')
let currencyConverter = new cc({from:"RUB", to:"BYN", amount:1000})


currencyConverter.convert().then((response) => {
    console.log(`>>1000 RUB = ${response} BYN`) 
})
*/

// --------------------------------------------------------------------------
// #4 – Работа с модулями. Создание модуля

// npm install --save @types/node      //если не срабатывает подсказка при написании 'require'
// create my_math.js 
// module.exports = {add: add,minus: minus}

// >> code
/*
const os = require('os')
let res = os.platform()
console.log(res)

const my_math = require('./my_math')
let res1 = my_math.add(4,5)
let res2 = my_math.minus(4,5)
console.log(res1)
console.log(res2)
*/

// --------------------------------------------------------------------------
// #5 – Работа с файлами
// writeFileSync    перезаписывает файл
// writeFile        не дожидается выполнения первой функции. задачи запускаются ll
//      ('some.txt', 'utf8', (err, data)=>{}) 
// this called "callback function"


// >> code
/*
const fs = require('fs')

// let result = fs.readFileSync('some.txt', 'utf8')
// console.log(result)
// fs.writeFileSync('some.txt', result + '\nhello obama!')
// or
fs.readFile('some.txt','utf-8', (err,data)=>{
    fs.writeFile('some.txt', data + 'HI',(err,data)=>{
        console.log('its work!')
    })
})
*/

// --------------------------------------------------------------------------
// #6 – Работа с папками
// если нужно удалить папку, то придется удалить сначала все содержимое этой папки

// >> code

/*
const fs = require('fs')
// fs.mkdirSync('text-files')
// or
// fs.mkdir('text-files', ()=>{
//     fs.writeFile('./text-files/some.txt', 'hello',()=>{})
// })


fs.unlink('./text-files/some.txt', ()=>{
    fs.rmdir('./text-files', ()=>{})
})
*/


// --------------------------------------------------------------------------
// #7 – Создание своего сервера
/*
const http = require('http')

let server =  http.createServer((req,res)=>{
    // res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
    //res.end('hi obama!!!')
    // or
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    // res.end('hi <b>obama!!!</d>')
     res.end(`<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Node js</title>
     </head>
     <body>
     
         <h1>hello html</h1>
         
     </body>
     </html>`)
})


const PORT = 8080
const HOST = 'localhost'
// const HOST = '127.0.0.1'

server.listen(PORT, HOST, ()=>{
    console.log(`server run: http://${HOST}:${PORT}`)
})
*/


// --------------------------------------------------------------------------
// #8.1 – Шаблоны HTML
/*
const http = require('http')
const fs = require('fs')

let server =  http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
  
    const stream = fs.createReadStream('./templates/index.html')
    stream.pipe(res)
})


const PORT = 8080
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{
    console.log(`server run: http://${HOST}:${PORT}`)
})
*/



// #8.2 – Отслеживание URL
/*
const http = require('http')
const fs = require('fs')

let server =  http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})


    if(req.url == '/')
        fs.createReadStream('./templates/index.html').pipe(res)
    else if(req.url =='/about')
        fs.createReadStream('./templates/about.html').pipe(res)
    else
        fs.createReadStream('./templates/error.html').pipe(res)
})


const PORT = 8080
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`server run: http://${HOST}:${PORT}`)
})
*/


// --------------------------------------------------------------------------
// #9 – Введение в Express JS
// 1. установка библиотеки      npm install express
// 2. настройка сервера на основе Express JS
/*
const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('This home page')
})



app.get('/user/:username/:id', (req,res) => {
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})
*/


// --------------------------------------------------------------------------
// #10 – Использование шаблонизатора EJS
//npm install ejs

// <% Тег 'Scriptlet', для потока управления, без вывода
// <%_ Тег Scriptlet 'Whitespace Slurping', удаляет все пробелы перед ним
// <%= Выводит значение в шаблон (экранированное)
// <%- Выводит неэкранированное значение в шаблон
// <%# Тег комментария, без выполнения, без вывода
// <%% Выводит литерал '<%'
// %%> Выводит литерал '%>'
// %> Обычный закрывающий тег
// -%> Тег Trim-mode ('newline slurp'), обрезает после новой строки
// _%> Конечный тег Whitespace Slurping удаляет все пробелы после него

// https://github.com/mde/ejs/blob/main/docs/syntax.md


/*
const express = require('express')
const app = express()
app.set('view engine', 'ejs') // явно указываем что используем шаблонизатор

app.get('/', (req,res) => {
    // res.sendFile(__dirname + '/templates/index.html')
    res.render('index_ejs')   //render - используется для добавления файла через шаблонизатор
})

app.get('/about', (req,res) => {
    res.render('about_ejs')   
})


app.get('/user/:username', (req,res) => {
    let data = {username: req.params.username, hobbies:['football', 'skate']}
    res.render('user', data)
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})

*/


// --------------------------------------------------------------------------
// #11 – Подключение файлов. Статические файлы
/*
const express = require('express')
const app = express()
app.set('view engine', 'ejs') // явно указываем что используем шаблонизатор
app.use(express.static('public')) //весь код который тут описан будет срабатывать перед отображением информации

app.get('/', (req,res) => {
    res.render('index_ejs')   //render - используется для добавления файла через шаблонизатор
})

app.get('/about', (req,res) => {
    res.render('about_ejs')   
})

app.get('/user/:username', (req,res) => {
    let data = {username: req.params.username, hobbies:['football', 'skate']}
    res.render('user', data)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})
*/


// --------------------------------------------------------------------------
// #12 – Получение и обработка данных от пользователя
// npm i body-parser // бибииотека для обработки форм

const express = require('express')
const app = express()

app.set('view engine', 'ejs') // явно указываем что используем шаблонизатор
app.use(express.urlencoded({extended: false})) // для получения корректных данных из форм. мы уже установили боди парсер, а теперь указываем, что мы будем использовать этот боди парсер
app.use(express.static('public')) //весь код который тут описан будет срабатывать перед отображением информации

app.get('/', (req,res) => {
    res.render('index_ejs')   //render - используется для добавления файла через шаблонизатор
})

app.get('/about', (req,res) => {
    res.render('about_ejs')   
})

app.get('/user/:username', (req,res) => {
    let data = {username: req.params.username, hobbies:['football', 'skate']}
    res.render('user', data)
})

app.post('/check-user', (req,res) => {
    let username = req.body.username
    if (username == "")
        return res.redirect('/')
    else    
        return res.redirect('/user/' + username)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})