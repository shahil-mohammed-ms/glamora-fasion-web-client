import ProductItem from "@/components/productItem/ProductItem"

 
 function Product({params}) {


  return (
   <ProductItem productId={params.productId} />
  )
}

export default Product