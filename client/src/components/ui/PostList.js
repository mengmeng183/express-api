import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

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

      }
    }
    let posts = this.state.posts.map((item,i)=><div style={styles.content}  key={i}><p style={styles.title}>{item.title}</p></div>)
    return(
      <div>
        <Link to='/write' style={styles.link}>写文章</Link>
      　{posts}
      </div>
    )
  }
}

export default PostList;
