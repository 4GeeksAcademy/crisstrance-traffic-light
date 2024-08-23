import React,{useState} from "react";




export const TrafficLight = () => {

    const [ color, setColor ] = useState("red");


    return (
        <div className="container justify-content-center align-items-center vh-100">
            <div>
                <h1>Traffic Light</h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
            <div
                className="bg-dark p-3 rounded d-flex flex-column align-items-center"
                style={{ width: '100px' }}
            >
                <div className="mb-3">
                    <i onClick={() => setColor('red')} 
                    className={`fas fa-circle text-danger fa-4x glow-${color == 'red' ? color : ''}`}></i>
                </div>
                <div className="mb-3">
                    <i onClick={() => setColor('yellow')} 
                    className={`fas fa-circle text-warning fa-4x glow-${color == 'yellow' ? color : ''}`}></i>
                </div>
                <div>
                    <i onClick={() => setColor('green')} 
                    className={`fas fa-circle text-success fa-4x glow-${color == 'green' ? color : ''}`}></i>
                </div>
            </div>
            </div>
        </div>
    )
}