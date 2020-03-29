import React from 'react';
import FormComponent from '../components/FormComponentContainer';
import ListComponent from '../components/ListComponentContainer';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">React App Tracker</h2>
                <span className="border-bottom"></span>
                <FormComponent />
                <ListComponent />
            </div>
        )
    }
}

export default App;