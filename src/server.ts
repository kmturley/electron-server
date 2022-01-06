import * as express from 'express'
import * as path from "path"

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.get('/api', (req: any, res: any) => {
  res.json({ date: new Date() })
})

function startServer(port:number = 3000) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

export {
  startServer
}

