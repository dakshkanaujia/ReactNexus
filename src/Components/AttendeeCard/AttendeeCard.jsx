import React from 'react';
import './AttendeeCard.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function AttendeeCard({ attendee }) {

    return (
        <div className="card shadow-xl shadow-black w-80 h-96 overflow-hidden m-5 something">
            <div className="imageContainer w-full h-56 flex justify-center items-center">
                <img className="object-cover object-center w-40 h-40 rounded-full" src={attendee.image} alt={attendee.name} />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-xl text-white">{attendee.name}</h2>
                <p className="text-lg text-white">{attendee.role}</p>
                <div className="flex justify-start items-center mt-2">
                    <FaLinkedinIn className="text-2xl text-white mr-4" />
                    <FaInstagram className="text-2xl text-white mr-4" />
                </div>
            </div>
        </div>
    );
}

export default AttendeeCard;
