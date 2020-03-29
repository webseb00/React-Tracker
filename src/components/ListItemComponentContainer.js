import { connect } from 'react-redux';
import { deleteItem, closedItem } from '../reducer/actions';
import ListItemComponent from './ListItemComponent';

const mapDispatchToProps = dispatch => ({
    deleteItem: (id) => dispatch(deleteItem(id)),
    closedItem: (id) => dispatch(closedItem(id))
});

export default connect(null, mapDispatchToProps)(ListItemComponent);