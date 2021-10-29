import React, { useState, useRef, useEffect } from 'react';
import Scanner from './Scanner';
import Result from './Result';
import './display.css';

const Display = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const scannerRef = useRef(null);



    return (
        <div>
            <div className="container">
            <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Scan'}</button>
          
            <ul className="results">
                {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
            </ul>
            <div className="window" ref={scannerRef} >
                {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                <canvas className="drawingBuffer" />
                {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults([...results, result])} /> : null}
                </div>  
                <button>Return Home</button>  
            </div>
            </div>
    );
};

export default Display;
