import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"


function Pagination() {
const [products,setProducts] = useState([])
const [page,setPage] = useState(1)

useEffect(function(){
async function fetchProducts(){
try {
    const res =  await axios.get('https://dummyjson.com/products');
    const products = await res.data.products;
    // console.log(products)
    setProducts(products)
    } catch (error) {
   console.log(error)
}
}
fetchProducts()
    },[])

    function selectPageHandler(selectedPage){
        if(selectedPage>=1 && selectedPage<=products.length/5 && selectedPage!==page)
         setPage(selectedPage)
    }
  
  return (
    <div className="bg-orange-100 p-4 h-screen  mx-auto">
    {products?.slice(page*5-5,page*5).map((product)=><Product product={product} key={product.id}/>)}
    {products.length>0 && <div className=" flex justify-center items-end gap-2 text-center text-2xl">
        <button className="bg-orange-700 text-white p-1 px-4 rounded-sm"  onClick={()=>selectPageHandler(page-1)}>Prev</button>
        {
            [...Array(products.length/5)].map((_,index)=>{
                return <span className="cursor-pointer" key={index} onClick={()=>selectPageHandler(index+1)}> {index+1}</span>
            })
        }
        {page<products.length && <button className="bg-orange-700 text-white p-1 px-4 rounded-sm"  onClick={()=>selectPageHandler(page+1)} >Next</button>}
    </div>}
    </div>
  )
}

export default Pagination