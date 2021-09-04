
import { render } from '@testing-library/react';
import React, { Fragment } from 'react';
import './App.css';
import Footer from './components/footer'

// function App() {
//   return (
//     <div className="App">
//       <Footer />

//     </div>
//   );
// }

class App extends React.Component {
  constructor (props){
    super(props);

  }
  render(){
    return(
      <Fragment>
        <Footer />
        </Fragment>
    )
  }
}



export default App;
