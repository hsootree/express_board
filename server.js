const express = require('express') // express 프레임워크 모듈을 express라 한다.
const app = express() // 변수 express를 app이라 한다.
const randomstring = require('randomstring') 

const fs = require('fs') // 파일 불러오는 함수를 fs라 한다.
const data = fs.readFile('index.ejs', 'utf8') 

const ejs = require('ejs')


app.set('view engine', 'ejs') // template engine 설정
app.use('/static', express.static('public'))



const data = {
  titile: 'Template Language',
  maessage: 'Hello EJS!',
  showSecret: true
}
res.render('index.ejs', data)














app.listen(3000, () => {
  console.log('listening...3000')
})



