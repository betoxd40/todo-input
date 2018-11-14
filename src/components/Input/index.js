import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };
    render () {
        return (
            <input type="text" value={this.props.value} onChange={e => this.props.onChange(e.target.value)} />
        );
    }
}

export default Input;