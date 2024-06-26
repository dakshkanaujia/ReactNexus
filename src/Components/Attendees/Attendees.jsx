import React from "react";
import { useState } from 'react';
import AttendeeCard from "../AttendeeCard/AttendeeCard";
import './Attendees.css';

function Attendees({attendees}) {    

  return (
    <div className="w-11/12 h-screen flex flex-wrap justify-center overflow-auto">
        {
            attendees.map((attendee) => {
                return(
                    <div className="m-10">
                        <AttendeeCard key={attendee.name} attendee={attendee} />
                    </div>
                )
            })
        }
    </div>
  );
}

export default Attendees;