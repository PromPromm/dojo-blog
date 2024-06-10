import Navbar from './Navbar';
import Home from './Home';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the Page'
  const likes = 50 
  const link = 'http://www.google.com'
  return (
    <Router>
      <div className="App">
      {/* <h1>{title}</h1>
      <p>Liked {likes} times</p>

      <p>{'Promise Anuoluwa'}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{10}</p>

      <a href={link}>Go to google</a> */}
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={   <Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
