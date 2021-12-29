import React, {useState} from 'react';
import "./alternatives.css";


function AlternativesFront() {

    return (
        
            <div className="front">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#84BF04" width="140">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h1 className="titleFront" >Alternative plus saine</h1>
            </div>
    );
}

export default AlternativesFront;
