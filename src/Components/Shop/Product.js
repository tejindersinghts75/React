import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Features/AddtoCart/AddToCart';




function Product({ showData }) {
  

   
    const dispatch = useDispatch()

    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    const [sortData, setFilterData] = useState([])
    const { valueRange } = useSelector((store) => store.todoSlice)
    console.log("values", valueRange)
    const fetchData = () => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                const output = response.data.products;
                setData(output)
                         
                const sortOutput =output.filter(price => price.price >= valueRange.sliderValue)

                const searchOutput = sortOutput.filter((element) => element.brand.toLowerCase() == valueRange.inputValue.toLowerCase())
                const searchOutputCond = valueRange.inputValue ? searchOutput : output

                const finalOutput =  searchOutputCond 
                console.log("searchOutput " ,finalOutput)
                setData(finalOutput);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const [currentPage, setCurrentPage] = useState(1);
    const[recordPerPage] = useState(6)
    


    function nexPage ()
    {
        setCurrentPage(currentPage + 1)
    }
  

    function prevpage ()
    {
        setCurrentPage(currentPage - 1)
    }

    const indexOfLastRecord = currentPage * recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordPerPage
    const nPages =  (data.length / recordPerPage)

    
    console.log("pageFirst", nPages)



    const addToCarts = (item) => {
        //   console.log(item)
        setProduct({ ...product, item });
        // dispatch(addToCart("product"))
        dispatch(addToCart(item))
    }
 
   
    useEffect(() => {     
        fetchData();
      
    }, [valueRange]);

   
    // useEffect(() => {
    //     // showData(product);

    //     // console.log("shopproduct:", sendData)
    // }, [product]);

    //   const {cart}= useSelector((store)=>store.todoSlice)
    //   console.log("fadf",cart )

    //   const addData=()=>
    //   {
    //     dispatch(addToCart("tejinder"))
    //   }

    return (
        <div className="shop_container">
            {/* <button onClick={addData} >Click</button> */}
            {data.slice(indexOfFirstRecord,indexOfLastRecord).map((item) => (
                <div style={{padding:"20px" , border:"1px solid #e3e3e3", borderRadius:"10px", textAlign:"left"}} key={item.id}>
                    <img style={{ width: "250px",height:"200px" , objectFit:"cover", marginBottom:"15px" }} src={item.thumbnail} alt={item.title} />
                    <p style={{fontSize:"15px",marginBottom:"0px", textAlign:"left",fontWeight:"600"}}>{item.title}</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{fontSize:"15px",marginBottom:"0px", textAlign:"left"}}>{item.brand}</p>
                    <p style={{fontSize:"15px",marginBottom:"0px", textAlign:"left"}}>{item.price}</p>
                    </div>
                    <button className="atcbtn" onClick={() => addToCarts(item)}>Add to Cart</button>
                </div>

            ))}
                <div style={{display:"flex"}}>
                    <button onClick={prevpage} disabled={currentPage === 1}>Back</button>
                    <button onClick={nexPage}  disabled={currentPage === nPages } >Next</button>
                </div>
  
        </div>
    )
}

export default Product;