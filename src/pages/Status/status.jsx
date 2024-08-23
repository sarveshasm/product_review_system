import React from "react";
import AppLayout from "../../components/applayout/AppLayout";
import '../../components/applayout/styles.css'
import './status.css'

function Status(){
    return <AppLayout body={<Body/>} />
}
function Body(){
    return (
        <div className="status-table-container">
            <h1 className="status-table-heading">Status of Products</h1>
            <div className="status-search-container">
                <input type="text" className="status-search-input" placeholder="Search" />
            </div>
            <table className="status-table">
                <thead>
                    <tr>
                        <th className="table-header">PID</th>
                        <th className="table-header">Problem Statements</th>
                        <th className="table-header">Status</th>
                        <th className="table-header">Review-1</th>
                        <th className="table-header">Review-2</th>
                        <th className="table-header">Review-3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row">
                        <td className="table-cell">101</td>
                        <td className="table-cell">Problem Statement</td>
                        <td className="table-cell ongoing-status">Ongoing</td>
                        <td className="table-cell review-link">View</td>
                        <td className="table-cell review-link">View</td>
                        <td className="table-cell review-link">View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Status