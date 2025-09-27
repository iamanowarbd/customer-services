import React from 'react';

import vector1 from "../../images/vector1.svg"
import vector2 from "../../images/vector2.svg"

const CounterDiv = ({inProgressCount = 0, completedCount = 0 }) => {
   
    // const inProgressStatus = 
    //     { 
    //         id: "in_progress", 
    //         title: "In-Progress", 
    //         count: inProgressCount,
    //     };
    //     const resolvedStatus =
    //     { 
    //         id: "resolved", 
    //         title: "Resolved", 
    //         count: completedCount,
    //     };

    const baseClasses = "w-1/2 max-h-64 p-10 rounded-2xl bg-cover bg-center text-center flex flex-col items-center justify-center bg-blend-overlay";

    return (
      <div className="flex pt-20 items-center gap-3">
        <div
        //  key={status.id}
         className={baseClasses}
          
          style={{
            backgroundImage: `linear-gradient(to right, #632EE3, #9F62F2), url(${vector1}), url(${vector2})`,
            backgroundSize: "auto",
            backgroundPosition: "0 0, right center, left center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <h1 className="task-in-progress text-2xl text-white font-bold">In-Progress</h1>
          <span className='pt-5 text-6xl text-white font-bold'>{inProgressCount}</span>
        </div>
        <div 
        // key={status.id}
         className={baseClasses}
         
          style={{
            backgroundImage: `linear-gradient(to right, #54CF68, #00827A), url(${vector1}), url(${vector2})`,
            backgroundSize: "auto",
            backgroundPosition: "0 0, right center, left center",
            backgroundRepeat: "no-repeat"
          }}>
          <h1 className='task-resolved text-2xl text-white font-bold'>Resolved</h1>
          <span className='pt-5 text-6xl text-white font-bold'>{completedCount}</span>
        </div>
        
      </div>
    );
};

export default CounterDiv;