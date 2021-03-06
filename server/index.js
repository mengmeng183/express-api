var express = require('express')
var app = express()
var mongoose = require('mongoose');
var Post = require('./models/post');
mongoose.Promise = global.Promise;//取消警告信息
mongoose.connect('mongodb://localhost:27017/express-api');//连接数据库
var db = mongoose.connection;

var bodyParser = require('body-parser')
app.use(bodyParser.json())//解析json
app.use(bodyParser.urlencoded({extended:false}))//解析表单

//关闭同源策略，开放CORS（跨域共享）
var cors = require ('cors');
app.use(cors());　//use用来添加中间件

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('success!');
})
app.get('/', function (req, res) {
  var page = '<form method = "post" action = "/posts">'+
                '<label style="display:block;width:30px;">title:</label>'+
                '<input type = "text" name = "title" />'+
                '</br>'+'</br>'+
                '<label style="display:block;width:30px;">tag:</label>'+
                '<input type = "text" name = "category" />'+
                '</br>'+'</br>'+
                '<label style="display:block;width:30px;">content:</label>'+
                '<input type = "text" name = "content" />'+
                '</br>'+'</br>'+
                '<input type = "submit" />'+
              '</form>'
  res.send(page)
})
app.post('/posts', function (req, res) {
  // res.send("The blog title is:" + req.body.title+'\n'+"The blog category is:" + req.body.category+'\n'+"The blog content is:" + req.body.content+'\n')
  // for(var item in req.body){
  //   post[item] = req.body[item]
  // }
  var post = new Post({title:req.body.title,category:req.body.category,content:req.body.content});
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })
  // res.redirect('/posts')
  res.json({message:'保存成功'})
})
app.get('/posts',function(req,res){
  Post.find().sort({'createdAt':-1}).exec(function(err,posts){
    res.json({ posts: posts}) //返回json格式数据，名为posts，内容为查找的结果
  })
})
app.get('/posts/:id',function(req,res){
  Post.findById({_id:req.params.id},function(err,doc){ //用findById比findOne更好
    if(err) return res.send('出错了');
    res.json({post:doc})
  })
})

app.listen(3000,function(){
  console.log('running on port 3000...plz visit http://localhost:3000');
})
