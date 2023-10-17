const express = require('express')
const {
  getBlogs, 
  getBlog, 
  createBlog,
  deleteBlog,
  updateBlog
} = require('../controllers/blogController')

const router = express.Router()

// GET all Blogs
router.get('/', getBlogs)

// GET a single blog
router.get('/:id', getBlog)

// POST a new blog
router.post('/', createBlog)


//DELETE BLOG 
router.delete('/:id', deleteBlog);

//UPDATE BLOG
router.patch('/:id', updateBlog)

//export router
module.exports = router;

