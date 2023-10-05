import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Products(){

  const[products, setProducts] = useState([]); 

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data); 
    })
  },[])

    return(
      <Layout>
        <Link className="bg-green-400 text-white p-2 rounded-lg" href={'products/new'}> Add new products +</Link>
      <table className="basic mt-2 mr-1">
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          {
            products.map(product => (
              <tr>
                <td>{product.title}</td>
                <td>
                  <Link href={'/products/edit/'+product._id}>
                    Edit
                  </Link>
                  <Link href={'/products/delete/'+product._id}>
                  Delete
                  </Link>
                </td>
              </tr>
            ))
          }  
          </tbody> 
      </table>
      </Layout>
    )
}