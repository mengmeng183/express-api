import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import map from 'lodash/fp/map';

class PostList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    //在此发Ajax请求
    //请求服务器端json数据
    axios.get('http://localhost:3000/posts').then(
     (res) => (
       this.setState({
         posts:res.data.posts
       })
     ))
  }
  render () {
    let styles={
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title:{
        fontSize: '1.2em'
      },
      link:{
        display:'block',
        textDecoration:'none',
        color:'#fff',
        fontSize:'20px',
        width:'100px',
        height:'40px',
        lineHeight:'40px',
        textAlign:'center',
        borderRadius:'5px',
        margin:'0 auto',
        backgroundColor:'#00bcd4'
      },
      box:{
        float:'right',
        position:'absolute',
        bottom:'3px',
        right:'10px'
      },
      btn:{
        textDecoration:'none',
        color:'#00bcd4',
        marginLeft:'20px'
      }
    }
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <div style={styles.box}>
            <Link to={`/post/${post._id}`} style={styles.btn}>查看</Link>
            <Link to={`/post/${post._id}`} style={styles.btn}>查看</Link>
            <Link to={`/post/${post._id}`} style={styles.btn}>查看</Link>
          </div>
        </div>
      )
    }, this.state.posts);
    return (
      <div>
        <Link to='/write' style={styles.link}>写文章</Link>
        { postList }
      </div>
    );
  }
}

export default PostList;
