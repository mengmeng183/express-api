import React from 'react';
import axios from 'axios';
import Settings from '../../settings';
import Form from './Form';

class NewPost extends React.Component {
  newPost(data){
    //axios传统上我们认为它就是发ajax请求的类似于jquery的$.ajax()，就是用来发http请求的
    axios.post(`${Settings.host}/posts`,data)//post后面跟/posts,根据according to REST api structrue
    //例如把一篇博客当做一个resource（资源）
    //REST规范包括:GET /pusts  列出所有博客  PUT /posts/:post_id  更新一篇博客 DELETE /posts/:post_id 删除一篇博客 GET /posts/:post_id　打开一篇博客
    //REST架构有两大优势：１．请求的格式符合正常用户思维　２．最大程度的尊重了http verb设计者的原始意图
    .then(function(res){
      // console.log(res.data.message);
      this.context.router.push('/');//放在外面有可能最新的文章没有保存就跳过去了
    }.bind(this))
    // .then(res => {
    //   console.log(res.data.message);
    //   this.context.router.push('/');
    // })
  }
  // publishPost(data) {
  //   axios.post(`${Settings.host}/posts`, data)
  //   .then(res => {
  //     console.log(res.data.message);
  //     this.context.router.push('/');
  //   })
  //   .catch(res => {
  //     if (error.response) {
  //       console.log(error.response.data.error);
  //     } else {
  //       console.log(error.message);
  //     }
  //   })
  // }
  render () {
    let styles={
      content: {
       width: '100%',
       maxWidth: '600px',
       margin: '30px auto',
       backgroundColor: '#fff',
       borderRadius: '10px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     title: {
       fontSize: '1.2em',
       textAlign: 'center',
       paddingTop: '20px'
     }
    }
   return(
     <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form label='发布文章' newPost={this.newPost.bind(this)}/>
      </div>
   )
  }
}
NewPost.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default NewPost;
