import React from 'react';
import ReactDOM from 'react-dom';
import './Column.css';
import {Header, Input} from 'semantic-ui-react';

const Roll_Number_Header = () => (
    <div className='column'>
        <Header as="h3" attached='top'>
            Roll Number
        </Header>
        <Input attached fluid/>
        <Header as="h3" attached='top'>
            Length in feet
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            Intake Date
        </Header>
        <Input attached fluid/>
    </div>
)

export default Roll_Number_Header