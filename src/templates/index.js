import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Post from 'templates/post'
/*import Meta from 'components/meta'
import Layout from 'components/layout'*/
import Page from 'templates/page'

const Template = ({ data, location }) => (
    <>
      {get(data, 'post.frontmatter.layout') !== 'page' ? (
        <Post
          data={get(data, 'post')}
          options={{
            isIndex: false,
            //adsense: get(data, 'site.meta.adsense'),
          }}
        />
      ) : (
        <Page {...this.props} />
      )}
    </>
)
export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        layout
        title
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
        featuredImage {
            src
            alt
        }
      }
    }
  }
`

/*
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        layout
        title
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
 */