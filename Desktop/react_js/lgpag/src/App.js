import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Pagination from './Pagination';

function App() {
  const[post, setPost]=useState([])
  const[currentpage, setCurrentpage]=useState(1)
  const[postperpage, setPostPerPage]= useState(10)

  
  
useEffect(()=> {
  async function getPosts (){
    let posts = await axios.get("https://jsonplaceholder.typicode.com/comments")
    console.log(posts.data)
    setPost(posts.data)
 }
 getPosts()
 
},[])

const paginate =(val)=>{
  setCurrentpage(val)
}


// pagination(10) slicing
const indexOfLastPost = currentpage * postperpage
const indexOfFirstPost = indexOfLastPost - postperpage
const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost) 

  return (
    <div className="App m-5 p-5">

<Pagination post={post} postperpage={postperpage} paginate={paginate}  currentpage={currentpage}  setCurrentpage={setCurrentpage} setPostPerPage={setPostPerPage}
/>
    {currentPosts.map((val)=>{
      return(<>
        <h1>{val.id}, {val.name}</h1>
      <h3>{val.email}</h3>
      <p>{val.body}</p>
      </>
      )
    })}
     
    </div>
  );
}

export default App;
