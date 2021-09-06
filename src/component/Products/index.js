import React from 'react'
import {ProductsContainer,ProductsHeading,ProductsWrapper,ProductsCard,ProductsImg,ProductsInfo,ProductsTitle,ProductsDesc,ProductsPrice,ProductsButton} from './ProductsEliments'

const Products = ({heading, data}) => {
    return (
        <>
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductsWrapper>
                    {data.map(( products, indeh ) =>{
                        return(
                            <ProductsCard key={indeh}>
                                <ProductsImg src={products.img} alt={products.alt}/>
                                <ProductsInfo>
                                    <ProductsTitle>
                                        {products.name}
                                    </ProductsTitle>
                                    <ProductsDesc>
                                        {products.dest}
                                    </ProductsDesc>
                                    <ProductsPrice>
                                        {products.price}
                                    </ProductsPrice>
                                    <ProductsButton>
                                        {products.button}
                                    </ProductsButton>
                                </ProductsInfo>
                            </ProductsCard>
                        )
                    })}
                </ProductsWrapper>
            </ProductsContainer>
            
        </>
    )
}

export default Products
