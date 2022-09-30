import express from 'express'
import {exec} from 'child_process'

// Create the express app
const app = express()

const port = process.env.PORT ?? 3000
app.listen(port, () => {
  console.log(`Started at http://localhost:${port}`)
})

// webhook rebuild dg-backend-rapid
app.post('/webhook-8cd2e298-4beb-4349-bfee-dc1749578e5b', (req, res) => {
  exec('cd /home/dockerbuild/dgm-backend && npm run build:rapid')

  res.sendStatus(200)
})