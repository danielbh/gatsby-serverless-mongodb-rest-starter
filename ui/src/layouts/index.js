import React, {Component} from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {NavigationBar} from "../components"
import "isomorphic-fetch"

const Template = (props) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <NavigationBar/>
    {props.children()}
  </div>
)


Template.PropTypes = {
  children: PropTypes.func,
};

export default Template;