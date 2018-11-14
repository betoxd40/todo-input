import React from 'react';

const List = (props) => {
    return (
        props.list.map( (item, i) => {
            return <span key={i}>{item}</span>
        })
    );
};

export default List;