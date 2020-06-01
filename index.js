const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/patch', express.static('public'))

app.listen(port, () => console.log(`File system running at http://localhost:${port}`))