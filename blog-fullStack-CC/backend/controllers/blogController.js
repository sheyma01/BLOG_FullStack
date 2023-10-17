const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

// get all Blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1})

  res.status(200).json(blogs)
}

// get a single Blog
const getBlog = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Blog not found'})
  }

  const blog = await Blog.findById(id)

  if (!blog) {
    return res.status(404).json({error: 'Blog not found'})
  }

  res.status(200).json(blog)
}

// create a new Blog
const createBlog = async (req, res) => {
  const {title, body, author} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!body) {
    emptyFields.push('body')
  }
  if (!author) {
    emptyFields.push('author')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'SVP remplir tous les cases', emptyFields })
  }

  // ajouter à la database
  try {
    const blog = await Blog.create({ title, body, author })
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

  
}


////supprimer un blog
const deleteBlog = async (req,res) => {
  const {id} = req.params;

    const delBlog = await Blog.findByIdAndDelete({_id: id});

    if(!delBlog){
        return res.status(404).json({err : 'Cannot Delete Blog.'})
    }
    res.status(200).json(delBlog)
}

///////update my blog
const updateBlog = async (req,res) => {
  const {id} = req.params;
  const {title, body, author} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err : "No Such Blog"})
    }
    const upBlog = await Blog.findOneAndUpdate({_id: id}, {title, body, author});

    if(!upBlog){
        return res.status(400).json({err : "No Such Blog"})
    }
    res.status(200).json(upBlog);
}



module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog
}
