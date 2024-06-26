import React from 'react';
import './AttendeeCard.css';
function AttendeeCard({ attendee }) {

    return (
        <div className="card bg-white shadow-lg w-80 h-96 rounded-lg overflow-hidden m-5 something bg-slate-800">
            <div className="imageContainer w-full h-56 flex justify-center items-center">
                <img className="object-cover object-center w-40 h-40 rounded-full" src={attendee.image} alt={attendee.name} />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-lg text-white">{attendee.name}</h2>
                <p className="text-sm text-white">{attendee.role}</p>
                {/* <p className="text-gray-700 mt-2">{attendee.description}</p> */}
            </div>
        </div>
    );
}

export default AttendeeCard;
