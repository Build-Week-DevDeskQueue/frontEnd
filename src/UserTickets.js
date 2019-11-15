import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketDetails from "./TicketDetails";

export default function UserTickets (props) {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axios
    .get("https://devdesk-backend.herokuapp.com/api/tickets/")
    .then(result => setTickets(result.data))
    .catch(error => console.log(error));
  }, [])
//useEffect runs axios one time w empty dependency array

  const handleDelete = (event, id) => {
    event.preventDefault()
    const ticket = tickets.find(ticket => ticket.id === id)

    if (window.confirm('Sure you want to delete this?'))
    setTickets(tickets.filter(ticket => ticket.id !== id))
    axios.delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
      .then(result => {
        alert('Deleted.')
      })
      .catch(error => {
        console.log(error)
        setTickets([ ...tickets, ticket ])
      })
  }

  return (
    <>
    <div className="ticket-list">
      {tickets.map(ticket => (
        <>
        <TicketDetails key={ticket.id} ticket={ticket} handleDelete={handleDelete} />
        </>
      ))}
    </div>
    </>
  );
}