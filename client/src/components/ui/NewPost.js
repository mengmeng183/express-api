import React from 'react';
import axios from 'axios';

import Form from './Form';

class NewPost extends React.Component {
  newPost(data){
    axios.post('http://localhost:3000/posts',data)
    .then(function(res){
      console.log(res.data.message);
      this.context.router.push('/');//放在外面有可能最新的文章没有保存就跳过去了
    }.bind(this))
    // .then(res => {
    //   console.log(res.data.message);
    //   this.context.router.push('/');
    // })
  }
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
