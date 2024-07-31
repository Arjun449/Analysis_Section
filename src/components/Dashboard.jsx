// src/components/Dashboard.jsx
// import React from 'react';
// import './charts/ChartSetup';
// import StockoutRate from './StockoutRate';
// import ReturnRate from './ReturnRate';
// import BackorderRate from './BackorderRate';
// import InventoryDaysSupply from './InventoryDaysSupply';
// import InventoryCarryingCostRate from './InventoryCarryingCostRate';
// import InventoryTurnoverRatio from './InventoryTurnoverRatio';
// import InventoryToSalesRatio from './InventoryToSalesRatio';
// import InventoryCarryingCost from './InventoryCarryingCost';
// import OnTimeShipments from './OnTimeShipments';

// const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             <div className="top-row">
//                 <StockoutRate />
//                 <ReturnRate />
//                 <BackorderRate />
//                 <InventoryDaysSupply />
//             </div>
//             <div className="middle-row">
//                 <InventoryCarryingCostRate />
//                 <InventoryTurnoverRatio />
//                 <InventoryToSalesRatio />
//             </div>
//             <div className="bottom-row">
//                 <InventoryCarryingCost />
//                 <OnTimeShipments />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import React from 'react';
import StockoutRate from './StockoutRate';
import ReturnRate from './ReturnRate';
import BackorderRate from './BackorderRate';
import InventoryDaysSupply from './InventoryDaysSupply';
import InventoryCarryingCostRate from './InventoryCarryingCostRate';
import InventoryTurnoverRatio from './InventoryTurnoverRatio';
import InventoryToSalesRatio from './InventoryToSalesRatio';
import InventoryCarryingCost from './InventoryCarryingCost';
import OnTimeShipments from './OnTimeShipments';
import '../App'; // Import CSS for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="row">
                <div className="col">
                    <StockoutRate />
                </div>
                <div className="col">
                    <ReturnRate />
                </div>
                <div className="col">
                    <BackorderRate />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InventoryDaysSupply />
                </div>
                <div className="col">
                    <InventoryCarryingCostRate />
                </div>
                <div className="col">
                    <InventoryTurnoverRatio />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InventoryToSalesRatio />
                </div>
                <div className="col">
                    <InventoryCarryingCost />
                </div>
                <div className="col">
                    <OnTimeShipments />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

