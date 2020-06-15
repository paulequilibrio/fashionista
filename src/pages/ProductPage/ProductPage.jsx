import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ProductImage from '../../components/Product/ProductImage'
import ProductInfo from '../../components/Product/ProductInfo'

import { slugfy } from '../../utils'
import './ProductPage.css'

export const getProductBySlug = (products, slug) => {
  const array = products.filter(product => slugfy(product) === slug)
  return array.length === 1 ? array[0] : null
}

const ProductPage = ({ match }) => {
  const products = useSelector(state => state.catalog.products)
  const [product, setProduct] = useState(null)
  const slug = match.params.slug

  useEffect(() => {
    if (products && products.length > 0) {
      setProduct(getProductBySlug(products, slug))
    }
  }, [slug, products])

  return (
    <div className='product'>
      <div className='container'>
        {product ? (
          <div className='product__page'>
            <ProductImage
              image={product.image}
              discount={product.discount_percentage}
              alt={product.name}
            />
            <ProductInfo product={product} />
          </div>
        ) : (
          <div>Produto não encontrado</div>
        )}
      </div>
    </div>
  )
}

export default ProductPage
