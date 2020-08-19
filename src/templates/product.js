import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import Header from '../components/header';

import AliceCarousel from 'react-alice-carousel';
import styled from '@emotion/styled';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';


import "react-alice-carousel/lib/alice-carousel.css";
import '../css/product.css'
import assetUrl from '../components/contentfulImage';




export const query = graphql `
    query productQuery($slug: String!) {
        item: contentfulProduct(productSlug: {eq: $slug}) {
        id
        productSlug
        productName
        shortDescription
        description {
          json
        }
        mainImage {
          fluid(quality: 90, maxHeight: 400, maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        otherImages {
          fluid(quality: 90, maxHeight: 400, maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        price
        discountedPrice
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
  `

const Bold = styled.span`
  font-weight: bold;
  color: black;
`;

const P = styled.p`
// color: orangered;
`;

const StyledHyperLink = styled.span`
  color: purple;
  padding: 1px 2px;
  background: orange;
  cursor: pointer;
`;

// render the styling
const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;
const HyperLink = ({ children }) => (
<StyledHyperLink>{children}</StyledHyperLink>
);

// modifying the options
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: (node, children) => (
      <HyperLink>{children}</HyperLink>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img className='custom-asset' alt={node.data.target.fields.title['en-US']} src={
          node.data.target.fields.file['en-US'].url
        }/>
      );
    }
  },
};

const StyledImage = styled(Image)`
  width: 100%;
  height: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;



const Product = ({ data: { item } }) => {

  useEffect(() => {
    const i = setTimeout(() => {
      console.log('timer')
    }, 2000)
    return () => {
      clearTimeout(i);
    }
  }, []);


  const responsive = {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1024: {
      items: 1
    },
    1440: {
      items: 1
    }
  };
  

  return (
    <Layout>
      <Header />
      <>
      <div className="product-card">
        <div className="product-images">
          <AliceCarousel autoPlay autoPlayInterval={6000} responsive={responsive}>
          {item.otherImages.map((otherImages, i) => (
              <StyledImage className="sliderimg" key={[] + i} fluid={item.otherImages[i].fluid} alt={item.productName}/>
            ))}
          </AliceCarousel>
        </div>

        <div className="product-info">
          <h2>{item.productName}</h2>
            <p className="price"> ${item.price}</p>
            <p className="price"> {item.discountedPrice}</p>
          <div className="buy-button animated shake">
            <button
              className={`snipcart-add-item`}
              data-item-id={item.id}
              data-item-name={item.productName}
              data-item-image={item.mainImage.fluid.src}
              data-item-price={item.discountedPrice ? item.discountedPrice : item.price}
              data-item-url={`https://slicksal.com/products/${item.productSlug}`}
            >
              Buy Now
            </button>
          </div>
          <main>{documentToReactComponents(item.description.json, options)}</main>
        </div>
      </div>
      </>
    </Layout>
  );
};

export default Product;
