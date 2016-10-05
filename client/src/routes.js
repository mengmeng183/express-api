import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPost from './components/ui/NewPost';


class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={PostList} />
          <Route path='/write' component={NewPost} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
