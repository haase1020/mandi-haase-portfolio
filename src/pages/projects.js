import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"


const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        github
        id
        url
        title
        image {
          childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`




export default ProjectsPage
