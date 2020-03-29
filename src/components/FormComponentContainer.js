import { connect } from 'react-redux';
import { addItem } from '../reducer/actions';
import FormComponent from './FormComponent';

const mapDispatchToProps = dispatch => ({
    addItem: (payload) => dispatch(addItem(payload))
});

export default connect(null, mapDispatchToProps)(FormComponent);
