import { useState } from "react";
import BlogMain from "./components/forms/BlogMain";
import BlogList from "./components/List/BlogList";

function App() {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (item) =>{
    setPosts((prevData) =>{
      return [
        ...prevData,
      item
      ]
    })
  }

  return (
    <div className="App">
      <BlogMain onPost = {addPostHandler}/>
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
