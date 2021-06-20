const fileRouter = require('express').Router()
const File = require('../models/file')

fileRouter.get('/', async (req, res) => {
    const files = await File.find({})
    res.json(files)
})

fileRouter.get('/:id', async(req, res) => {
    const file = await File.findById(req.params.id)
    res.json(file)
})

fileRouter.post('/', async(req, res) => {
    const body = req.body

    const file = new File({
        fileName: body.fileName,
        url: body.url,
        user: body.user,
      })
    
    
    const savedFile = await file.save()

    res.json(savedFile.toJSON())

})

module.exports = fileRouter