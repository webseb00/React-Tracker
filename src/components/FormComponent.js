import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import { PropTypes } from 'prop-types';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                description: '',
                assignedTo: '',
                value: '' || 'Low'
            }
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeValue(e) {
        const { item } = this.state;
        this.setState( {
            item: {
                ...item,
                value: e.target.value
            }
        });
    }

    handleChangeInput(e) {
        const { item } = this.state;
        this.setState({ item: { ...item, [e.target.name]: e.target.value } });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { description, value, assignedTo } = this.state.item;
        const { addItem } = this.props;
        // check if data was entered by the user
        if(description === '' || assignedTo === '') { return alert('Please fill the form properly!'); }
        // wrap all values into data object...
        const data = {
            description,
            value,
            assignedTo,
            id: uuidv1(),
            status: true
        }
        //... and pass them to the reducer
        addItem(data);
        // reset state and input fields
        this.setState({ 
            item: {
                description: '',
                assignedTo: '',
                value: '' || 'Low'
            }
        });
    }

    render() {
        const { handleSubmit, handleChangeInput, handleChangeValue } = this;
        const { description, assignedTo, value } = this.state.item;
        return (
            <div className="form-wrapper">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label 
                            htmlFor="issueDescInput">
                            Description
                        </label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="description"
                            id="issueDescInput"
                            value={description}
                            onChange={(e) => handleChangeInput(e)} 
                            placeholder="Describe the issue..."
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="issueSeverityInput">
                            Issue Importance
                        </label>
                        <select 
                            id="issueSeverityInput"
                            className="form-control"
                            value={value}
                            onChange={(e) => handleChangeValue(e)}    
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="issueAssignedToInput">
                            Issue assigned to:    
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="assignedTo"
                            id="issueAssignedToInput"
                            value={assignedTo}
                            onChange={(e) => handleChangeInput(e)}
                            placholder="Issue assigned to..."
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

FormComponent.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default FormComponent;