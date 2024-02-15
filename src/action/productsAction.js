import axios from "axios"
import { productsRequest, productsSuccess, productsFail} from "../slice/productsSlice"


export const getProducts = (search) =>async(dispatch)=>{
    try{
        dispatch(productsRequest())
        let link=`https://dummyjson.com/products`
        if(search){
            link += `/search?q=${search}`  
        }
        const {data}=await axios.get(link)
        dispatch(productsSuccess(data))
    }
    catch(err){
        //handle error
        dispatch(productsFail(err.response.data.message))

    }
}