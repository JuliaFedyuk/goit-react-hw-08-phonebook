import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <div className="filterWrapper">
    <label className="filter_label">
      Find contacts by name
      <input
        className="filter_input"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapToDispatchProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapToDispatchProps)(Filter);
