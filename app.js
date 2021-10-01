import express from 'express'
import fetch from 'node-fetch'
const app = express()

app.get('/alunos/todos', (req, res) => {
    let alunos = [
        {'Nome':'Erika Sousa'},
        {'Nome':'João Alves'},
        {'Nome':'Maria Silva'},
        {'Nome':'Daniel Santos'},
        {'Nome':'Eliza Vieira'}
    ]
    res.json(alunos)
})

app.get("/moeda/:valor_real", async (req, res) => {
  let url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
  let response = await fetch(url)
  const api = await response.json()
  const real = 21
  const dolar = api.USDBRL.high
  const conversao = real / dolar
  res.json({
    "real": real,
    "dolar": dolar,
    "valor em dolar": conversao  
  })
})


app.listen(3000)
