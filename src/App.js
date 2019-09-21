import React from 'react';
import './index.sass';
import BlogList from './BlogList';
import BlogArticle from './BlogArticle';
import BlogAbout from './BlogAbout';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
        <main className="blog">
          <nav className="blog__nav">
            <Link className="blog__nav-name" to='/Blog-SPA' exact='true'>LYU</Link>
            <Link className="blog__nav-list" to='/Blog-SPA/post' exact='true'>List</Link>
            <Link className="blog__nav-about" to='/Blog-SPA/about'>About</Link>
          </nav>
          <Route exact path='Blog-SPA' component={BlogList} />
          <Route exact path='Blog-SPA/' component={BlogList} />
          <Route exact path='Blog-SPA/post' component={BlogList} />
          <Route path='Blog-SPA/about' component={BlogAbout} />
          <Route path='Blog-SPA/post/:postId' component={BlogArticle} />
        </main> 
    </Router>
  );
}


export default App;
