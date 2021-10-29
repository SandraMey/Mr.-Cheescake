import React, { useState, useRef, useEffect } from "react";
import Scanner from "./Scanner";
import Result from "./Result";
import "./display.css";
import axios from "axios";

const DisplayScan = ({ product, setProduct }) => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  const scannerRef = useRef(null);
  const initialRender = useRef(true);
  let barcode = results[0];

   const getOpenFoodFact = async () => {
    // Send the request
   await axios
      .get(`https://fr.openfoodfacts.org/api/v2/product/${barcode}`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.product);
      });
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else 
    getOpenFoodFact();
    

  }, [barcode]);

  return (
    <div>
      <div className="container">
        <button onClick={() => setScanning(!scanning)}>
          {scanning ? "Stop" : "Scan"}
        </button>

        <ul className="results">
          {results.map(
            (result) =>
              result.codeResult && (
                <Result key={result.codeResult.code} result={result} />
              )
          )}
        </ul>
        <div className="window" ref={scannerRef}>
          {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
          <canvas className="drawingBuffer" />
          {scanning ? (
            <Scanner
              scannerRef={scannerRef}
              onDetected={(result) => setResults([...results, result])}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DisplayScan;
