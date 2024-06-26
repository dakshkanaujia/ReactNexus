import React from "react";
import { useState } from 'react';
import AttendeeCard from "../AttendeeCard/AttendeeCard";

function Attendees({attendees}) {    

  return (
    <div className="w-11/12 h-screen flex flex-wrap justify-center overflow-auto">
        {
            attendees.map((attendee) => {
                return(
                    <AttendeeCard key={attendee.name} attendee={attendee} />
                )
            })
        }
    </div>
  );
}

export default Attendees;