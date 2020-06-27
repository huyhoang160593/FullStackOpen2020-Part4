const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const blogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  url: {
    type: String,
  },
  likes: {
    type: Number,
  }
})

blogSchema.set('toJSON',{
  transform: (document,returnObject) => {
    returnObject.id = returnObject._id.toString()
    delete returnObject._id
    delete returnObject.__v
  }
})

module.exports = mongoose.model('Blog',blogSchema)