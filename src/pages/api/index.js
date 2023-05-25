import { getAllProducts, findOneAndUpdate } from './database/operations/productsOperations'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)


  const { method, query } = req;
  console.log('query:', query)

  if(session){
    if (method === 'PUT') {
      const update = req.body;
      try {
        const updatedProduct = await findOneAndUpdate(query.id, update);
        res.status(200).json(updatedProduct);
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Failed to update product' });
      }
    } else {
      const productos = await getAllProducts(query);
      res.json(productos);
    }
  }else {
    // Not Signed in
    console.log("UNAUTHORISED")
    res.status(401).json({message: 'Not Authorised'})
  }
}