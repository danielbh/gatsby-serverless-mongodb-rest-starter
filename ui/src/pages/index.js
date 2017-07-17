import React from "react"
import {PostForm, PostFeed} from '../containers'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <PostForm/>
        <PostFeed/>
      </div>
    )
  }
}
