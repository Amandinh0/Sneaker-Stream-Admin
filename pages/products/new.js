/*
    label style needed
    h1 style needed

*/
import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductFrom";



export default function NewProduct(){

   return(
    <Layout>
         <h1 className="text-sky-300 text-lg">New Product</h1>
        <ProductForm />
    </Layout>
   )
}