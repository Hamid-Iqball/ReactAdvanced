import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"


function Pagination() {
const [products,setProducts] = useState([])
const [page,setPage] = useState(1)
const [sortProduct,setSortProduct] = useState('')
const productsPerPage =5

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

    function selectPageHandler(selectedPage){
        if(selectedPage>=1 && selectedPage<=products.length/productsPerPage && selectedPage!==page)
            console.log('paginate')
         setPage(selectedPage)
    }
    
    function handleSort(e){
        setSortProduct(e.target.value)
    }
    const paginatedProducts = products?.slice((page-1)*productsPerPage , page*productsPerPage)

    const sortedProduct = [...paginatedProducts].sort((a,b)=>{
        if(sortProduct === 'high'){
            return b.price-a.price
        }
        if(sortProduct === 'low'){
            return a.price - b.price
        }
        return 0
    })

  return (<div className="bg-orange-100 p-4 min-h-screen  mx-auto">
  <div className="text-end bg-transparent text-orange-700 font-semibold">
    <select name="sort" id="sort" onChange={handleSort}>
        <option value="" selected >Sort By Price</option>
        <option value="high">Sort By Price (hight first)</option>
        <option value="low">Sort By Price (low first)</option>
    </select>
  </div>
    <div >
    {sortedProduct.map((product)=><Product product={product} key={product.id}/>)}
    {products.length>0 && <div className=" flex justify-center items-end gap-2 text-center text-2xl">
        <button className="bg-orange-700 text-white p-1 px-4 rounded-sm"  onClick={()=>selectPageHandler(page-1)} disabled={page===1}>Prev</button>
        {
            [...Array(products.length/productsPerPage)].map((_,index)=>{
                return <span className="cursor-pointer" key={index} onClick={()=>selectPageHandler(index+1)}> {index+1}</span>
            })
        }
        {page<products.length && <button className="bg-orange-700 text-white p-1 px-4 rounded-sm"  onClick={()=>selectPageHandler(page+1)} disabled={page===products.length/productsPerPage }>Next</button>}
    </div>}
    </div>
        </div>
  )
}

export default Pagination

