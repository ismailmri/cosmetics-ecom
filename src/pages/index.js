// import React from 'react';
// import { Link, graphql } from 'gatsby';
// import styled from '@emotion/styled';
// import Image from 'gatsby-image';
// import Layout from '../components/layout';
// import './index.css'
// import Hero from '../components/hero';
// import Feature from '../components/feature';
// import Content from '../components/content';
// import "animate.css/animate.min.css";

// export const query = graphql `
//   {
//   allContentfulProduct {
//     nodes {
//       id
//       productName
//       productSlug
//       shortDescription
//       price
//       discountedPrice
//       mainImage {
//         fluid(quality: 90, maxWidth: 300, maxHeight: 400) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//       otherImages {
//         fluid(quality: 90, maxWidth: 300, maxHeight: 400) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//     }
//   }
// }`;

// const StyledImage = styled(Image)`
//   width: 100%;
//   height: 60%;
//   max-height: 200px;
// `;



// const IndexPage = ({ data }) => {
//   const products = data.allContentfulProduct.nodes;
//   return (
//     <Layout>
//       <Hero />
//       <Feature />
//       <Content />
//       <div className="title">
//         <h1>The Best Eyebrows You Can Ask For!</h1>
//         <p>Our Customers Love Are In Love! Get The Brow Pen Now, Before It's Gone!</p>
//       </div>
//       <div className="products">
//         {products.map(product => (
//           <Link key={product.productSlug} to={`/products/${product.productSlug}`} style={{textDecoration: "none", color: "black"}}>
//                 <div className="card">
//                   <StyledImage fluid={product.mainImage.fluid} />
//                   <h4>{product.productName}</h4>
//                   <p className="price"> {product.price}</p>
//                   <p className="price"> {product.discountedPrice}</p>
//                   <div className="buy ">
//                     <button
//                       className={`snipcart-add-item`}
//                       data-item-id={product.id}
//                       data-item-name={product.productName}
//                       data-item-image={product.mainImage.fluid.src}
//                       data-item-price={product.discountedPrice ? product.discountedPrice : product.price}
//                       data-item-url={`https://lucid-engelbart-e13bc0.netlify.app//products/${product.productSlug}`}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//           </Link>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default IndexPage

import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import './index.css'
import Hero from '../components/hero';
import Feature from '../components/feature';
import Content from '../components/content';
import "animate.css/animate.min.css";

export const query = graphql `
  {
  allContentfulProduct {
    nodes {
      id
      productName
      productSlug
      shortDescription
      price
      discountedPrice
      mainImage {
        fluid(quality: 90, maxWidth: 300, maxHeight: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        fluid(quality: 90, maxWidth: 300, maxHeight: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
}`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 60%;
  margin: auto;
  padding: auto;
  max-width: 470px;
  max-height: 470px;
`;



const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <Hero />
      <Feature />
      <Content />
      <div className="title">
        <h1>The Best Eyebrows You Can Ask For!</h1>
        <p>Our Customers Love Are In Love! Get The Brow Pen Now, Before It's Gone!</p>
      </div>
      <div className="products">
        {products.map(product => (
          <Link key={product.productSlug} to={`/products/${product.productSlug}`} style={{textDecoration: "none", color: "black"}}>
            <div className="card">
              <StyledImage fluid={product.mainImage.fluid} />
            </div>
            <div className="about">
              <h2>{product.productName}</h2>
                <span className="price"> {product.price}</span>
                <span className="price"> {product.discountedPrice}</span>
                <div className="buy">
                <button
                    className={`snipcart-add-item`}
                    data-item-id={product.id}
                    data-item-name={product.productName}
                    data-item-image={product.mainImage.fluid.src}
                    data-item-price={product.discountedPrice ? product.discountedPrice : product.price}
                    data-item-url={`https://lucid-engelbart-e13bc0.netlify.app/${product.productSlug}`}
                  >
                   Add to Cart
                  </button>
                  <button
                    className={`snipcart-add-item`}
                    data-item-id={product.id}
                    data-item-name={product.productName}
                    data-item-image={product.mainImage.fluid.src}
                    data-item-price={product.discountedPrice ? product.discountedPrice : product.price}
                    data-item-url={`https://lucid-engelbart-e13bc0.netlify.app/${product.productSlug}`}
                  >
                    Buy Now
                  </button>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage

