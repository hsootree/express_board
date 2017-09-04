const express = require('express')
const app = express()
const randomstring = require('randomstring')

const fs = require('fs') // 파일 불러오는 함수를 fs라 한다.
const data = fs.readFile('public.js', 'utf8')




