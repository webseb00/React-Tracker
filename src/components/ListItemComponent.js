import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faClock } from '@fortawesome/free-solid-svg-icons'

const ListItemComponent = ({ description, id, value, assignedTo, deleteItem, closedItem, status }) => (
    <li id={id} className={`${status ? 'list-group-item list-group-item-success' : 'list-group-item list-group-item-light'}`}>
        <span className={`${status ? 'badge badge-primary' : 'badge badge-success'}`}>
            {status ? 'Open' : 'Closed'}
        </span>
        <h3 className="listItem-title">{description}</h3>
        <p className="listItem-priority">
            <FontAwesomeIcon icon={faClock} />
            {value}
        </p>
        <p className="listItem-assign">
            <FontAwesomeIcon icon={faThumbsUp} />
            Assigned To: {assignedTo}
        </p>
        <div className="listItem-cta">
            <button type="button" onClick={() => closedItem(id)} className="btn btn-info">
                Close
            </button>
            <button type="button" onClick={() => deleteItem(id)} className="btn btn-danger">Delete</button>
        </div>
    </li>
);

ListItemComponent.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    deleteItem: PropTypes.func.isRequired,
    closedItem: PropTypes.func.isRequired
};

export default ListItemComponent;