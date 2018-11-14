import React from 'react';
import Input from '../Input';
import List from '../List';
import Button from '../Button';

class Form extends React.Component {
    state = {
        list: [],
        title: 'Todo app',
        buttonTitle: 'Add',
        item: '',
    };
    onChange = (e) => {
        this.setState({item: e});
    };
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.item !== '') {
            this.setState({
                list: [...this.state.list, this.state.item],
                item: '',
            });
        } else {
            console.log('field cant be empty');
        }
    };
    render() {
        return (
            <form>
                <h1>{this.state.title}</h1>
                <Input onChange={this.onChange} value={this.state.item} />
                <Button title={this.state.buttonTitle} handleClick={this.handleClick}/>
                <List list={this.state.list}/>
            </form>
        );
    }
}

export default Form;