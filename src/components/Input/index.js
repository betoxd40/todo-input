import React from 'react';

class Input extends React.Component {
    render () {
        return (
            <input type="text" value={this.props.value} onChange={e => this.props.onChange(e.target.value)} />
        );
    }
}

export default Input;