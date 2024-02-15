import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "./Loader"
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Product from './Product';
import Slider from 'rc-slider'
import { getProducts } from '../action/productsAction';
import  Tooltip  from 'rc-tooltip';
import "rc-slider/assets/index.css"
import "rc-tooltip/assets/bootstrap.css"

const Home = () => {
    const dispatch = useDispatch()
    const {products,loading,error}=useSelector((state)=> state.productsState)
    const [price,setPrice]=useState([1,1000])
    const [priceChanged,setPriceChanged]=useState(price)
    useEffect(()=>{
        if(error){
            return toast.error(error)
        }
        dispatch(getProducts())
    },[error,dispatch])

    
    return (
    <>
    {loading?<Loader/>:
        <section id="products" className="container mt-5">
            <div className="row ml-5">
                <div className='col-6 col-md-3 mb-5 mt-5'>
                    {/* Price Filter */}           
                    <div className='mt-5'>
                        <h3 className='mb-4 ml-5'>Price Filter</h3>
                        <div className='px-6 ' onMouseUp={()=>{setPriceChanged(price)}}>
                        <Slider
                            range={true}
                            marks={
                                {
                                    1:"RS.1",
                                    1000:"Rs.1000"
                                }
                            }
                            min={1}
                            max={1000}
                            defaultValue={price}
                            onChange={(price)=>{

                                setPrice(price)
                            }}
                            handleRender={
                                renderProps => {
                                    return(
                                        <Tooltip overlay={`Rs.${renderProps.props['aria-valuenow']}`}>
                                            <div {...renderProps.props}></div>
                                        </Tooltip>
                                    )
                                }
                            }/>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-9'>
                    <div className='row justify-content-center'>
                    { products && products.map(product =>(
                        (product.price>=priceChanged[0] & product.price<=priceChanged[1]?
                        <Product col={4} key={product._id} product={product}/>:<></>)
                    ))} 
                    </div>
                </div>
            </div>
        </section>}       
    </>
   )
}

export default Home