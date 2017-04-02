const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()

app.use('/static', express.static('bower_components'))

var storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, __dirname + '/public/uploads/')
  },
  filename : (req, file, cb) => {
    const filename = file.originalname.split(".")
    cb(null, `${filename[0]}_${Date.now()}.${filename[1]}`)
  }
})

var upload = multer({
  storage : storage
})


app.post('/upload', upload.any(), function(req, res) {
  res.json({ success: true, fileName: req.files[0].originalname,
              savedfileName : req.files[0].filename })
})


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(3000,() => {
  console.log("Server is listening at port 3000")
})
