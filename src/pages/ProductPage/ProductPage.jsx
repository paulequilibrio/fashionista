import React from 'react'

import './ProductPage.css'

const ProductPage = (props) => {
  return (
    <div className='product'>
      <div className='container'>
        <figure className='procuct__image'>
          <img src='' alt='' />
          {props.match.params.productName}
        </figure>
      </div>
    </div>
  )
}

export default ProductPage
