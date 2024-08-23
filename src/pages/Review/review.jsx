import React from "react";
import AppLayout from "../../components/applayout/AppLayout";
import '../../components/applayout/styles.css'
import './review.css'

function Review(){
    return <AppLayout body={<Body/>} />
}

function Body(){
    const productData = [
        {
            "pid": 101,
            "problemStatement": "Problem Statement-1",
            "productType": "Software",
            "status": "Ongoing"
        },
        {
            "pid": 102,
            "problemStatement": "Problem Statement-2",
            "productType": "Hardware",
            "status": "Completed"
        },
        {
            "pid": 103,
            "problemStatement": "Problem Statement-3",
            "productType": "Software",
            "status": "Ongoing"
        }
    ];
    return (
        <div className="product-list-container">
            <h1 className="product-list-heading">Products</h1>
            <div className="product-search-container">
                <input type="text" className="product-search-input" placeholder="Search" />
            </div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th className="table-header">PID</th>
                        <th className="table-header">Problem Statements</th>
                        <th className="table-header">Product Type</th>
                        <th className="table-header">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product) => (
                        <tr className="table-row" key={product.pid}>
                            <td className="table-cell">{product.pid}</td>
                            <td className="table-cell">{product.problemStatement}</td>
                            <td className="table-cell">{product.productType}</td>
                            <td className="table-cell">
                                <button className="status-button">View Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    

}
export default Review