import axios from 'axios';

function getPosts(){
  let address = 'http://localhost:3000/posts'
  return axios.get(address)
    .then((res) => (
      { getPosts:res.posts }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export {getPosts};
