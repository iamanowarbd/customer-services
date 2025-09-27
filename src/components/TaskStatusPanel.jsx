import React, { useState } from 'react';

const TaskStatusPanel = ({ ticket, onComplete }) => {
    const [lastResolvedTask, setLastResolvedTask] = useState(null);
    
    const handleComplete = () => {
        if (ticket) {
            // Store the last resolved task
            setLastResolvedTask(ticket);
            onComplete(ticket.id);
        }
    };
    
    const handleFinalizeResolvedTask = () => {
        if (lastResolvedTask) {
            alert(`Resolved task #${lastResolvedTask.id} "${lastResolvedTask.title}" has been finalized!`);
            setLastResolvedTask(null);
        } else {
            alert("No resolved task to finalize!");
        }
    };

    return (
        <div className="sticky top-6 space-y-8"> 
            {/* Task Status Section */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Task Status</h3>
                
                {ticket ? (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">Selected Ticket:</p>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-sm text-indigo-700">{ticket.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">Status: <span className="font-medium">{ticket.status}</span></p>
                            <p className="text-xs text-gray-500 mt-1">ID: <span className="font-medium">#{ticket.id}</span></p>
                        </div>
                        
                        {(ticket.status === 'In-Progress' || ticket.status === 'Open') && (
                            <button
                                onClick={handleComplete}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 shadow-md"
                            >
                                Complete Task
                            </button>
                        )}
                    </div>
                ) : (
                    <p className="text-sm text-gray-500 italic">Select a ticket from the list to assign its status.</p>
                )}
            </div>

            {/* Resolved Task Section */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Resolved Task</h3>
                
                {lastResolvedTask ? (
                    <div className="space-y-4">
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <p className="font-medium text-sm text-green-800">{lastResolvedTask.title}</p>
                            <p className="text-xs text-gray-500">ID: #{lastResolvedTask.id}</p>
                            <p className="text-xs text-gray-500">Ready for finalization</p>
                        </div>
                        
                        <button
                            onClick={handleFinalizeResolvedTask}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-150 shadow-md"
                        >
                            Finalize Resolution
                        </button>
                    </div>
                ) : (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="font-medium text-sm text-blue-800">No resolved task yet</p>
                        <p className="text-xs text-gray-500">Complete a task to see it here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatusPanel;