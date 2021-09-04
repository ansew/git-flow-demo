
import { Fragment } from "react"
import React from "react";



import  Header  from "./components/Header/Header.js";
import './App.css';

import { Blogpost } from "../src/components/Blogpost/BlogList.js";
import { BlogPost2 } from "../src/components/Blogpost/BlogList2.js";
import { render } from "@testing-library/react";





export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
      users: [],
      
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15").then(response => {
      return response.json()
    }).then(resolt => {
      this.setState({ users: resolt.results })
    })

  }

  componentDidUpdate(previousprops, previousstate) {
    console.log(this.state)
    console.log(previousstate)

  }

  refresh =()=>{
    this.componentDidMount()
  }
  toggleLayout = () => {
    console.log('toggle');
    this.setState({ isListView: !this.state.isListView })
  }

  render() {
    return (
      <Fragment>

        <Header toggleLayout={this.toggleLayout} isListView={this.state.isListView} refresh={this.refresh} props1={this.state.users}  />
        {/* //<button onClick={this.toggleLayout}>Click me</button> */}
        {this.state.isListView ? <Blogpost props1={this.state.users} /> : <BlogPost2 props1={this.state.users} />}
     
      </Fragment>

    )

  }


}