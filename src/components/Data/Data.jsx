import React from 'react'

//import { results } from './RandomUsers.js'

export default class UselList extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
      const formatDate = (date) => {
        return new Date(date).toLocaleString();
    }
    const capitalName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    const shortEmail =  (mail) => {
        return mail.slice(0, 3)+"...@" + mail.split("@")[1];
    };

    const persons = this.props.person.map((item, index) => (
      <div className="col s12 m4 l3">
      <div className="card">
        <div className="card-image">
          <img src={item.picture.large} alt="img"/>
          <span className="card-title">{capitalName(item.name.first)}</span>
        </div>
        <div className="card-content">
          <p>Email: {shortEmail(item.email)}</p>
          <p>Date of birth: {formatDate(item.dob.date)}</p>
        </div>
      </div>
    </div>      
      ));

    return (
        <>
        <div className="container">
            <div className="row">
              {persons}      
            </div>
      </div>   
      </>
    )
  }
}
