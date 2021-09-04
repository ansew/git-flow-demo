import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Data from './components/Data/Data';
import DataBlock from './components/Data/DataBlock';

class SmartPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isListView: true,
            person: []
        };
        this.onSwitchList = this.onSwitchList.bind(this);
        this.onSwitchGrid = this.onSwitchGrid.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    onSwitchList() {
        this.setState({isListView: false});
    }

    onSwitchGrid() {
        this.setState({isListView: true});
        console.log('Switch');
    }

    onRefresh() {
        this.users();
        console.log('Refresh');
    }

    componentDidMount() {
        this.users();
        console.log('Did Mount');
    }

    users() {
        fetch('https://randomuser.me/api/?results=15')
        .then(response => {return response.json()})
        .then(({results}) => this.setState({person:results}));
        //console.log(results);
    }

    render() {
        return (
            <>
                <Header onSwitchGrid={this.onSwitchGrid} isListView={this.state.isListView} onSwitchList={this.onSwitchList} onRefresh={this.onRefresh} />
                {/*<SearchBar />*/}
               {/*<Loader /> */} 
                    {this.state.isListView 
                    ? <DataBlock person={this.state.person} />
                    : <Data person={this.state.person} /> }
                <Footer />
            </>
        );
    }
}

export {SmartPage};
