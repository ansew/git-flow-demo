import React, { Fragment } from "react";
import Header from "./components/Header/Header.js";
import "./App.css";
import { Blogpost } from "../src/components/Blogpost/BlogList.js";
import { BlogPost2 } from "../src/components/Blogpost/BlogList2.js";
import Footer from "./components/footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
      users: [],
      value: "",
      update: new Date(JSON.parse(localStorage.getItem("update")))
    };
  }
  componentDidMount() {
    if(!this.state.update){
      localStorage.setItem("update", JSON.stringify(new Date()));
    }
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => {
        return response.json();
      })
      .then((resolt) => {
        localStorage.setItem("update", JSON.stringify(new Date()));
        this.setState({ users: resolt.results,
                        update: new Date() });

      });
  }

  refresh = () => {
    this.componentDidMount();
  };
  toggleLayout = () => {
    console.log("toggle");
    this.setState({ isListView: !this.state.isListView });
  };
  onChange = (e) => this.setState({ value: e.target.value });
  render() {
    return (
      <Fragment>
        <Header
          toggleLayout={this.toggleLayout}
          isListView={this.state.isListView}
          refresh={this.refresh}
          props1={this.state.users}
        />
        {/* //<button onClick={this.toggleLayout}>Click me</button> */}
        {this.state.isListView ? (
          <Blogpost
            props1={this.state.users}
            val={this.state.value}
            search={this.onChange}
          />
        ) : (
          <BlogPost2
            props1={this.state.users}
            val={this.state.value}
            search={this.onChange}
          />
        )}
        <Footer />
      </Fragment>
    );
  }
}
