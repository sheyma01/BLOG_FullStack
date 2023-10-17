const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blog')

//express app
const app = express()



//middleware
app.use(express.json())



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})




//routes
app.use('/api/Blogs', blogRoutes)





//listen port +connexion Mongo
mongoose.connect("link to your database mongodb")
  .then(() => {
    app.listen(3000,()=>{
    console.log('listening on port 3000!!')
})
})
.catch((err) => {
        console.log(err)
}) 
