import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {

    const addToCart=(product)=>{
        let cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
        const isItemExist = cartItems.find(i=>i.id === product.id)
            if(!isItemExist){
                const items = [...cartItems,product]
                localStorage.setItem('cartItems',JSON.stringify(items))
            }
    }

  return (
    <>
        <section id="product1" class="section-p">
            <div class="procontainer">
                <div class="pro" >
                    <div>
                        <div class="card ">
                            <img className='card-img-top mx-auto'  alt={product.name} src={product.thumbnail && product.thumbnail}/>
                        </div>
                    </div>
                    <div class="des">
                        <h5>{product.name}</h5>
                        <div className="ratings mt-auto">
                            <div className="rating-outer">
                                <div className="rating-inner"  style={{width: `${product.rating/5*100}%`}} ></div>
                            </div><br />
                            <span id="no_of_reviews">({ product.numberOfReviews } Review)</span>
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                <Link onClick={()=>addToCart(product)}><i class="fa fa-shopping-cart cart"></i></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Product