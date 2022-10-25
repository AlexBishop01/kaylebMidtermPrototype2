import React from 'react';
import ReactDOM from 'react-dom';
import './Column.css';
import {Header, Input} from 'semantic-ui-react';

const Part_Column = () => (
    <div className='column'>
        <Header as='h3' attached='top'>
            Part Number
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            MSF
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            Weight
        </Header>
        <Input attached fluid/>
    </div>
)

export default Part_Column

