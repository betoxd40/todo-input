import React from 'react';
import Input from '../../components/Input/index';
import List from '../../components/List/index';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    handleClick,
    handleChange,
    clearInput } from '../../store/reducers/form';

class Form extends React.Component {
    state = {
        title: 'Todo app',
        buttonTitle: 'Add',
    };
    handleClickForm = (e) => {
        e.preventDefault();
        if (this.props.item !== '') {
            this.props.actions.handleClick();
            this.props.actions.clearInput();
        } else {
            console.log('field cant be empty');
        }
    };
    render() {
        return (
            <form>
                <h1>{this.state.title}</h1>
                <Input onChange={this.props.actions.handleChange} value={this.props.item} />
                <Button title={this.state.buttonTitle} handleClick={this.handleClickForm}/>
                <List list={this.props.list}/>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.form.item,
        list: state.form.list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleClick,
            handleChange,
            clearInput,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);