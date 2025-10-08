import React,{useState} from 'react'
import BlogContext from './BlogContext';

const BlogProvider = (props) => {
    const [blogList, setBlogList] = useState([]);
    const [editingItem, setEditingItem] = useState({url:"",title:"",des:"" });
    const [editingIndex, setEditingIndex] = useState(null);
    const addBlogs = (item ) =>{
      if(editingIndex===null){
             setBlogList((prevList) =>{
                return [
                    ...prevList,
                    item
                ]
             })       
        }else{
             const updatedList = [...blogList];
                updatedList[editingIndex] = editingItem;
                setBlogList(updatedList);
                return updatedList;
            }
        }
    

    const deleteBlogs = (index) =>{
        setBlogList(blogList.filter((item, itemIndex) => itemIndex !== index));
    }

    const editItemHandler = (index) =>{
        setEditingIndex(index);
        setEditingItem(blogList[index]);
    }

    const editBlogs = (name, value) =>{
        setEditingItem((prevItem) =>{
            return {
                ...prevItem,
                [name] : value 
            }
        })
    }

    const blogProviderValues={
        blogList,
        editingItem,
        addBlogs:addBlogs,
        deleteBlogs:deleteBlogs,
        editItemHandler:editItemHandler,
        editBlogs:editBlogs

    }

    return <BlogContext.Provider value={blogProviderValues}>
        {props.children}
    </BlogContext.Provider>
}

export default BlogProvider
