import React from 'react'

const BlogContext = React.createContext({
    blogList : [],
    editingItem:{url:"",title:"",description:"" },
    editingIndex:null,
    addBlogs:(item) =>{},
    deleteBlogs:(index) =>{},
    editItemHandler : (index) =>{},
    editBlogs:( url,title, des) =>{},
    resetEditingItem:()=>{}

})
 


export default BlogContext
