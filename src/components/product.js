import { useState, useEffect } from "react";

const noImage = "/noimage.jpg"
const routeUrl = `${process.env.ROUTE_URL}/api?id=`


export default function Product({ producto, setData, setShouldFetchData }) {
  const [product, setProduct] = useState(producto)
  const { descripcion, sku, imgUrl, _id:id } = product;
  const [edit, setEdit] = useState(false);
  
  const handleChange = async (e,id)=>{
    const {value, name} = e.target
    setProduct((prevProduct)=>({...prevProduct, [name]:value }))
    await saveProduct(id, {...product, [name]: value})
    setData(prevData => prevData.map(p => p._id === id ? product : p));
    setShouldFetchData(true)
  }

  const saveProduct = async (productId, updateData)=>{
    
    try {
      //console.log(productId)
      const response = await fetch(`${routeUrl}${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
      });

      if (response.ok) {
        console.log("Product updated successfully");
        // Handle success, e.g., show a success message to the user
      } else {
        console.error("Failed to update product");
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Failed to update product", error);
      // Handle error, e.g., show an error message to the user
    }
  }

  
  return (
    <div>
      <div className="flex items-center relative bg-white px-4 pt-5 pb-3 shadow-xl ring-1 ring-gray-900/5">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              width={50}
              height={50}
              alt={`image of ${descripcion}`}
              src={imgUrl ? imgUrl : noImage}
              quality={50}
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-2">
            <h1 className="text-sm font-medium text-gray-900 truncate dark:text-black break-words">
              {descripcion}
            </h1>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {sku}
            </p>
          </div>
        </div>

        <div className="absolute right-4 flex space-x-2">
          <button
            className="btn btn-xs btn-primary"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
          { //<button className="btn btn-xs btn-danger">Delete</button>
          }
        </div>
      </div>

      {edit && (
        <div>
          <form className="flex flex-col text-neutral-800">
            <input
              id={`descripcion-${id}`}
              type="text"
              name="descripcion"
              defaultValue={descripcion}
              className="bg-white "
              onChange={(e)=>handleChange(e,id)}
            />
            <input 
              id={`sku-${id}`} 
              type="text" 
              name="sku" 
              defaultValue={sku} 
              className="bg-white "
              onChange={(e)=>handleChange(e,id)}
              />
            <input
              id={`imgUrl-${id}`}
              type="text"
              name="imgUrl"
              defaultValue={imgUrl}
              className="bg-white "
              onChange={(e)=>handleChange(e, id)}
            />
          </form>
        </div>
      )}
    </div>
  );
}
