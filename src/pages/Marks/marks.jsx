import React from 'react';
import AppLayout from '../../components/applayout/AppLayout';
import '../../components/applayout/styles.css'
import './marks.css';

function Marks (){
    return <AppLayout body = {<Body/>}/>
}

function Body() {
    return (
        <div className="evaluation-container">
            <h1>Marks</h1>
            <div className="evaluation-form">
                <div className="evaluation-group">
                    <label className="evaluation-label">AIM (10)</label>
                    <input type="number" className="evaluation-input" placeholder="Enter marks" />
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">SOLUTION (10)</label>
                    <input type="number" className="evaluation-input" placeholder="Enter marks" />
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">TECHNOLOGY (10)</label>
                    <input type="number" className="evaluation-input" placeholder="Enter marks" />
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">COMMUNICATION (10)</label>
                    <input type="number" className="evaluation-input" placeholder="Enter marks" />
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">VIVA (10)</label>
                    <input type="number" className="evaluation-input" placeholder="Enter marks" />
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">SUGGESTIONS</label>
                    <textarea className="evaluation-textarea" placeholder="Enter suggestions"></textarea>
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">SELECTION STATUS</label>
                    <div className="button-container">
                        <button className="status-button accept-button">ACCEPT</button>
                        <button className="status-button reject-button">REJECT</button>
                    </div>
                </div>
                <div className="evaluation-group">
                    <label className="evaluation-label">REMARKS</label>
                    <textarea className="evaluation-textarea" placeholder="Enter remarks"></textarea>
                </div>
            </div>
        </div>
    );
}

export default Marks;
