import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from './Button';
import { useParams } from 'react-router-dom';
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate()

    const handleBackToMenu = () => {
        navigate(`/`)
    }

    return (  
        <>
            <div className="back-button-container">
                <Button onClick={handleBackToMenu}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2> 
                <p>Lorem ipsum | Um texto detalhado</p>
            </div>
        </>
    );
}
 
export default TaskDetails;