import React, { Suspense, useState } from 'react';
import './App.css'
import CounterDiv from './components/CounterDiv';
import Navbar from './components/Navbar';
import Tickets from './components/Tickets';
import Footer from './components/footer';

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}

function App() {
  const ticketsPromise = fetchTickets()
  const [selectedTicket, setSelectedTicket] = useState();
  const [tickets, setTickets] = useState([]);
  const [inProgressCount, setInProgressCount] = useState();
  const [completedCount, setCompletedCount] = useState();


  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    alert(`Ticket #${ticket.id} selected for task status!`);

    if (ticket.status === 'Open') {
      const updatedTickets = tickets.map(t =>
        t.id === ticket.id ? { ...t, status: 'In-Progress' } : t
      );
      setTickets(updatedTickets);
      setInProgressCount(prev => prev + 1);
    }
  };


  const handleCompleteTask = (ticketId) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
    setTickets(updatedTickets);
    setSelectedTicket(null);
    setInProgressCount(prev => prev - 1);
    setCompletedCount(prev => prev + 1);
    alert(`Ticket #${ticketId} has been resolved!`);
  };


  const handleTicketsLoaded = (loadedTickets) => {
    setTickets(loadedTickets);
    const inProgressCount = loadedTickets.filter(t => t.status === 'In-Progress').length;

    setInProgressCount(inProgressCount);
    setCompletedCount(0);
  };

  return (
    <>

      <Navbar></Navbar>
      <CounterDiv
        inProgressCount={inProgressCount}
        completedCount={completedCount} ></CounterDiv>

      <div className='pt-20'>
        <br></br>
        <h1 className='text-2xl font-bold'>Customer Tickets</h1>
        <br></br>
      </div>

      <Suspense fallback={<div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>}>
        <Tickets ticketsPromise={ticketsPromise}
          onSelectTicket={handleSelectTicket}
          selectedTicket={selectedTicket}
          onTicketsLoaded={handleTicketsLoaded}
          onCompleteTask={handleCompleteTask}></Tickets>
      </Suspense>
      
      <Footer></Footer>



    </>
  )
}

export default App
