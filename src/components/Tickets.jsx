import { useState, useEffect } from 'react';
import CalImg from '../../images/calander.svg'
import TaskStatusPanel from './TaskStatusPanel';

const StatusBadge = ({ status }) => {
    const baseClasses = "text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center";
    const dotClasses = "w-2 h-2 rounded-full mr-2";

    let colorClasses;
    let dotColorClasses;

    switch (status) {
        case 'Open':
            colorClasses = 'bg-green-100 text-green-700';
            dotColorClasses = 'bg-green-500';
            break;
        case 'In-Progress':
            colorClasses = 'bg-yellow-100 text-yellow-700';
            dotColorClasses = 'bg-yellow-500';
            break;
        default:
            colorClasses = 'bg-blue-100 text-blue-700';
            dotColorClasses = 'bg-blue-500';
            break;
    }

    return (
        <span className={`${baseClasses} ${colorClasses}`}>
            <span className={`${dotClasses} ${dotColorClasses}`}></span>
            {status}
        </span>
    );
};


const PriorityTag = ({ rawPriority }) => {
    const baseClasses = "text-xs font-semibold px-2 py-1 rounded-full inline-block tracking-wide";


    const cleanPriority = rawPriority.split(' ')[0].toUpperCase();
    let colorClasses;

    switch (cleanPriority) {
        case 'HIGH':
            colorClasses = 'text-[#F83044]';
            break;
        case 'MEDIUM':
            colorClasses = 'text-[#FEBB0C]';
            break;
        case 'LOW':
        default:
            colorClasses = 'text-[#02A53B]';
            break;
    }

    return (
        <span className={`${baseClasses} ${colorClasses}`}>
            {rawPriority}
        </span>
    );
};

// A single ticket card
const TicketCard = ({ ticket, onSelectTicket, isSelected }) => {
    // const formattedDate = ticket.createdAt ? new Date(ticket.createdAt).toISOString().substring(0, 10) : 'N/A';
    const handleClick = () => {
        onSelectTicket(ticket);
    };
    return (

        <div className={`ticket-card p-4 bg-white rounded-xl shadow-md flex flex-col justify-start border border-gray-100 transition duration-150 hover:shadow-lg h-44 ${isSelected ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={handleClick}
        >


            <div className="flex justify-between items-start mb-1">
                <h3 className="textarea-lg font-semibold text-gray-900 leading-tight pr-2">{ticket.title}</h3>
                <StatusBadge status={ticket.status} />
            </div>


            <p className="max-w-4/5 text-base text-gray-500 mb-2 line-clamp-2 overflow-hidden">
                {ticket.description}
            </p>


            <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-1">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 font-inter font-medium text-sm">#{ticket.id}</span>
                    <PriorityTag rawPriority={ticket.priority} />
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-500 font-medium">{ticket.customer}</span>
                    <span className="text-gray-500 flex items-center"><img src={CalImg} alt="" className="mr-2" /> {ticket.createdAt.substring(0, 10)}
                    </span>
                </div>
            </div>
        </div>
    );
};

/**Main**/

const Tickets = ({ ticketsPromise, onSelectTicket, selectedTicket, onTicketsLoaded, onCompleteTask }) => {

    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTickets = async () => {
            try {
                setIsLoading(true);
                const data = await ticketsPromise;
                setTickets(data);
                onTicketsLoaded(data);
                setIsLoading(false);
            } catch {
                setError("Failed to load tickets. Please check if tickets.json exists in the public folder.");
                
                setIsLoading(false);
            }
        };

        loadTickets();
    }, [ticketsPromise, onTicketsLoaded]);



    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-20 min-h-[50vh]">
                <p className="loading loading-dots text-xl"></p>
            </div>
        );
    }


    if (error) {
        return (
            <div className="flex items-center justify-center p-20 min-h-[50vh]">
                <p className="text-xl text-red-500 text-center max-w-lg mx-auto">{error}</p>
            </div>
        );
    }


    if (tickets.length === 0) {
        return (
            <div className="flex items-center justify-center p-6">
                <p className="text-lg text-gray-500">No tickets found.</p>
            </div>
        );
    }


    const half = Math.ceil(tickets.length / 2);
    const col1 = tickets.slice(0, half);
    const col2 = tickets.slice(half); 8

    return (
        <div className="bg-gray-50 p-6 md:p-10 font-sans">
            <div className="mx-auto">

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="space-y-4">
                            {col1.map(ticket => (
                                <TicketCard key={ticket.id}
                                    ticket={ticket}
                                    onSelectTicket={onSelectTicket}
                                    isSelected={selectedTicket && selectedTicket.id === ticket.id}
                                />
                            ))}
                        </div>


                        <div className="space-y-4">
                            {col2.map(ticket => (
                                <TicketCard key={ticket.id}
                                    ticket={ticket}
                                    onSelectTicket={onSelectTicket}
                                    isSelected={selectedTicket && selectedTicket.id === ticket.id}
                                />
                            ))}
                        </div>

                        <div className="ticket-status space-y-4">
                            <TaskStatusPanel
                                ticket={selectedTicket}
                                onComplete={onCompleteTask}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Tickets;
