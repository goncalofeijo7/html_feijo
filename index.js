const express = require('express')
const app = express()
 
app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/gatos.html'))
})
 
const port = 3000

app.listen(port, () => {
    console.log('Listenning...')
})