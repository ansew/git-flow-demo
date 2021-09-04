import React from 'react'

//import { results } from './RandomUsers.js'

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
   // console.log(results);
    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    }
    const capitalName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    const persons =  this.props.person.map((item, i) => (
        <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
            <div className="col s2">
            <img src={item.picture.large} alt="" className="circle responsive-img"/>
            </div>
            <div className="col s10">
            <p>name: {capitalName(item.name.first)}</p>
            <p>email: {item.email}</p>
            <p>date of birth: {formatDate(item.dob.date)}</p>
            </div>
        </div>
        </div>            
    ));        
    return (
        <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list container">{ persons }</div>
        </div>
        );
    }
}
