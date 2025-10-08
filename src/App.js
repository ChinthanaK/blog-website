import { useState } from "react";
import BlogMain from "./components/forms/BlogMain";
import BlogList from "./components/List/BlogList";
import BlogProvider from "./store/BlogProvider";

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
    <BlogProvider>
      <BlogMain onPost = {addPostHandler}/>
      <BlogList posts={posts} />
    </BlogProvider>
  );
}

export default App;
