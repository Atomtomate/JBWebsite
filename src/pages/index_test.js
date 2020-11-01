import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo";
import Bio from "../components/bio";
import Layout from "../components/layout";

const CategoriesPage = ({
                      data: {
                          allMarkdownRemark: { group },
                          site: {
                              siteMetadata: { title },
                          },
                      },
                            location}) => (
    <Layout location={location} title={title}>
        <SEO title="All posts by category" />
        <Bio />
        <ol style={{ listStyle: `none` }}>
            <h1>Categories</h1>
            <ul>
                {group.map(tag => (
                    <li key={tag.fieldValue}>
                        <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </ol>
    </Layout>
)

export default CategoriesPage

CategoriesPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}


export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`