import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Roll_Number_Header from './workstationPage/RollColumn';
import Part_Column from './workstationPage/PartColumn';
import Customer_Column from'./workstationPage/CustomerColumn';
import 'semantic-ui-css/semantic.min.css'

class HomePage extends React.Component {
    render() {
        return(
            <div className="home-page">
                <div className="title">
                    <h1>Produced Product Label</h1>
                </div>
                <div className="grid-container"></div>
                <div className="left">
                    <h2 className='label'>Roll</h2>
                    <div>
                        <Roll_Number_Header/>
                    </div>
                </div>
                <div className="left">
                    <h2 className='label'>Part</h2>
                    <div>
                        <Part_Column/>
                    </div>
                </div>
                <div className='center'>
                    <h2 className='label'>Customer</h2>
                    <div>
                        <Customer_Column/>
                    </div>
                </div>
                <div className="right">
                    <h2 className='label'>System</h2>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);