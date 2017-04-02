const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()



var storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, __dirname + '/public/uploads/')
  },
  filename : (req, file, cb) => {
    console.log("In here...", file)
    const filename = file.originalname.split(".")
    cb(null, `${filename[0]}_${Date.now()}.${filename[1]}`)
  }
})

var upload = multer({
  storage : storage
})


app.post('/upload', upload.any(), function(req, res) {
  console.log("Printing req.files...", req.files)
  res.json({ success: true, fileName: req.files[0].originalname,
              savedfileName : req.files[0].filename })
})


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(3000)
