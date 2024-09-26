import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"


function Pagination() {
const [products,setProducts] = useState([])

useEffect(function(){
async function fetchProducts(){
try {
    const res =  await axios.get('https://dummyjson.com/products');
    const products = await res.data.products;
    console.log(products)
    setProducts(products)
} catch (error) {
   console.log(error)
}
}

fetchProducts()
    },[])
  return (
    <div className="bg-orange-100 p-4  mx-auto">
{products.map((product)=><Product product={product} key={product.id}/>)}
    </div>
  )
}

export default Pagination