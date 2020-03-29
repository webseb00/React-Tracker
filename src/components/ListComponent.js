import React from 'react';
import ListItemComponent from './ListItemComponentContainer';

class ListComponent extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul className="list-wrapper list-group">
                {items.map(item => <ListItemComponent key={item.id} {...item} />)}
            </ul>
        )
    }
}

export default ListComponent;