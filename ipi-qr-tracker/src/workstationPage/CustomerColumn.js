import React from 'react';
import {Header, Input} from 'semantic-ui-react';

const Customer_Column = () => (
    <div className='column'>
        <Header as='h3' attached='top'>
            Customer Part Number
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            Part Description
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            Customer PO
        </Header>
        <Input attached fluid/>
        <Header as='h3' attached='top'>
            Customer Name
        </Header>
        <Input attached fluid/>
    </div>
)

export default Customer_Column;