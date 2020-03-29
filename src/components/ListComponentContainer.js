import { connect } from 'react-redux';
import { deleteItem } from '../reducer/actions';
import ListComponent from './ListComponent';

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(ListComponent);