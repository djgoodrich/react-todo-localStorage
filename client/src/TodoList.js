import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    
    componentWillMount() {
        localStorage.getItem('todo') && this.setState({
            items: JSON.parse(localStorage.getItem('todo'))
        })
    }
    

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('todo', JSON.stringify(nextState.items));
    }  

    addItem(event) {
        event.preventDefault();
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";

        console.log(this.state.items);
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key) 
        });
        
        this.setState({
            items: filteredItems
        });
    }
    
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={ (a) => this._inputElement = a } 
                        placeholder="task">
                    </input>
                    <button type="submit">Add</button>
                </form>
                </div>
                <TodoItems entries={this.state.items} 
                           delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoList;