import { useState } from "react"
import {AddCategory, GifGrid} from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Los Simpsons']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    /*     setCategories([...categories, 'Valorant']);*/
    /* setCategories(cats => [...cats, 'Valorant']);   */
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GifExpertApp</h1> 
      {/* <AddCategory setCategories={setCategories}/> */}
      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map( (category) =>(
           <GifGrid key={category}  category={category}/>
          )
        )
      }
    </>
  )
}

export default GifExpertApp
