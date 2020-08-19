import React from 'react'
import Layout from '../components/layout'

export default ({ data }) => {
    const {
        src,
        srcWebp,
        presentationWidth,
        presentationHeight,
    } = data.image.childImageSharp.fluid;
}

return (
    <Layout>
        <amp-img 
            src={srcWebp}
            width={presentationWidth}
            height={presentationHeight}
            alt={caption}
            layout="responsive"
        >
        <div fallback>
            <amp-img
                src={src}
                width={presentationWidth}
                height={presentationHeight}
                alt={caption}
                layout="responsive"
            />
        </div>
        </amp-img>
        <h1>Thats the image</h1>
        <span>Now lets go</span>
    </Layout>
)