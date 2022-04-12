import React,{ useState } from 'react';
import AddCategory from '../AddCategory';
import GifGrid from '../GifGrid/GifGrid';

export default function GifExoertApp() {
  // const categories = ["one punch","Samurai x", "Dragon Ball"];
  const [categories, setCategories] = useState(["Dragon Ball"]);
  // const handleAdd = () => {
  //   //1 METOD AQUI ABAJO O 
  //   //setCategories([...categories, "Naruto"]); 
  //   //2 METOD AQUI ABAJO O 
  //   setCategories((cats) =>[...cats, "Naruto X"]); 
  // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
        <ol>
          {
          categories.map( (category, index) =>( 
            <GifGrid key={category} categories={category} />
            ))
          }
        </ol>
        
    </>
  );
}
