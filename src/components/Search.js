import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProducts } from '../action/productsAction';
import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch=useDispatch()
    const location = useLocation()
    const [keyword,setKeyword] = useState("")

    const searchHandler = (e) =>{
        e.preventDefault();
        dispatch(getProducts(keyword))
    }

    const clearKeyword = () =>{
        setKeyword("")
    }

    useEffect(()=>{
        if(location.pathname==="/login"){
            clearKeyword();
        }
    },[location])

    return (
        
        <form onSubmit={searchHandler}>
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Search"
              onChange={(e)=>setKeyword(e.target.value)}
              value={keyword}
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        
    
  )
}

export default Search