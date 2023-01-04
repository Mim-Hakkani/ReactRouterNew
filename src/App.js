import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Post from './components/NestedRouting/Post';
import Posts from './components/NestedRouting/Posts';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the react Router -: ami Header  </h1>
      <Header/>

     

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path='friends' element={<Friends/>}></Route>
        <Route path='posts' element={<Posts/>}>
            {/* nested routing  */}
          <Route path=':postId' element={<Post/>}></Route>

        </Route>
          {/* dynamic routing for friends  step-1 */}
         <Route path='friend/:friendId' element={<FriendDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    
    <p>Ami footer tai amar tension nai </p>
    </div>
  );
}

export default App;
