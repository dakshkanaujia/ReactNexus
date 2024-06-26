import React, { useEffect } from "react";
import { useState } from 'react';
import Attendees from "../Attendees/Attendees";
import { exp } from "three/examples/jsm/nodes/Nodes.js";

function Search() {
    const [search, setSearch] = useState("");
    const [finalAttendees, setFinalAttendees] = useState([]);
    const attendees = [
        {
            "name": "John Doe",
            "role": "Software Engineer, Amazon",
            "description": "A software engineer at Amazon, John has been working on the AWS team for the past 5 years. He is passionate about serverless technologies and loves to share his knowledge with the community.",
            "image": "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg"
        },
        {
            "name": "Jane Smith",
            "role": "Designer, Google",
            "description": "Jane is a UX designer at Google, where she designs intuitive interfaces for various Google products. She enjoys solving complex design challenges and mentoring young designers.",
            "image": "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
        },
        {
            "name": "Samuel Green",
            "role": "Product Manager, Microsoft",
            "description": "Samuel is a product manager at Microsoft, focusing on cloud computing solutions. He has a background in software development and is adept at bridging the gap between technical teams and business stakeholders.",
            "image": "https://c8.alamy.com/comp/2AMC079/portrait-of-young-professional-man-wearing-suit-and-tie-while-staning-in-the-office-and-looking-at-camera-2AMC079.jpg"
        },
        {
            "name": "Emily Johnson",
            "role": "Data Scientist, Facebook",
            "description": "Emily is a data scientist at Facebook, specializing in machine learning algorithms. She is passionate about using data to drive product decisions and improve user experiences.",
            "image": "https://img.freepik.com/premium-photo/young-happy-professional-african-american-business-man-wearing-suit-eyeglasses-working-laptop-office-sitting-desk-looking-camera-female-company-manager-executive-portrait-workplace_220770-5104.jpg"
        },
        {
            "name": "Michael Brown",
            "role": "DevOps Engineer, Netflix",
            "description": "Michael is a DevOps engineer at Netflix, ensuring the reliability and scalability of the platform. He is an advocate for automation and continuous integration practices.",
            "image": "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/09/H20170921_Career-Woman_6_Eng_16_02_prof.jpg"
        },
        {
            "name": "Sophia Davis",
            "role": "Frontend Developer, Airbnb",
            "description": "Sophia is a frontend developer at Airbnb, working on creating responsive and accessible web interfaces. She is a strong proponent of web standards and modern JavaScript frameworks.",
            "image": "https://blogs.vmware.com/education/files/2021/03/video.png"
        },
        {
            "name": "James Wilson",
            "role": "Backend Developer, Twitter",
            "description": "James is a backend developer at Twitter, focusing on building scalable and high-performance APIs. He is experienced in various backend technologies and enjoys optimizing server-side code.",
            "image": "https://img.freepik.com/premium-photo/attractive-cheerful-business-woman-working-laptop-modern-office_484651-7339.jpg"
        },
        {
            "name": "Olivia Martinez",
            "role": "Mobile Developer, Uber",
            "description": "Olivia is a mobile developer at Uber, working on the iOS application. She is passionate about creating seamless user experiences and is always exploring new mobile technologies.",
            "image": "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg"
        },
        {
            "name": "David Anderson",
            "role": "Security Engineer, LinkedIn",
            "description": "David is a security engineer at LinkedIn, responsible for ensuring the security of user data. He has a deep understanding of cybersecurity threats and best practices.",
            "image": "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
        },
        {
            "name": "Isabella Thompson",
            "role": "Full Stack Developer, Shopify",
            "description": "Isabella is a full stack developer at Shopify, working on both the frontend and backend of the platform. She enjoys tackling complex technical problems and building robust solutions.",
            "image": "https://c8.alamy.com/comp/2AMC079/portrait-of-young-professional-man-wearing-suit-and-tie-while-staning-in-the-office-and-looking-at-camera-2AMC079.jpg"
        },
        {
            "name": "William Garcia",
            "role": "Cloud Engineer, IBM",
            "description": "William is a cloud engineer at IBM, specializing in cloud infrastructure and services. He has extensive experience with various cloud platforms and enjoys helping organizations migrate to the cloud.",
            "image": "https://img.freepik.com/premium-photo/young-happy-professional-african-american-business-man-wearing-suit-eyeglasses-working-laptop-office-sitting-desk-looking-camera-female-company-manager-executive-portrait-workplace_220770-5104.jpg"
        },
        {
            "name": "Mia Robinson",
            "role": "AI Researcher, OpenAI",
            "description": "Mia is an AI researcher at OpenAI, focusing on developing advanced machine learning models. She is passionate about AI ethics and ensuring the responsible use of AI technologies.",
            "image": "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/09/H20170921_Career-Woman_6_Eng_16_02_prof.jpg"
        },
        {
            "name": "Alexander Martinez",
            "role": "Blockchain Developer, Coinbase",
            "description": "Alexander is a blockchain developer at Coinbase, working on decentralized applications. He is a blockchain enthusiast and enjoys exploring the potential of distributed ledger technologies.",
            "image": "https://blogs.vmware.com/education/files/2021/03/video.png"
        },
        {
            "name": "Charlotte Harris",
            "role": "Quality Assurance Engineer, Spotify",
            "description": "Charlotte is a quality assurance engineer at Spotify, ensuring the quality and reliability of the platform. She is experienced in various testing methodologies and enjoys identifying and fixing bugs.",
            "image": "https://img.freepik.com/premium-photo/attractive-cheerful-business-woman-working-laptop-modern-office_484651-7339.jpg"
        },
        {
            "name": "Benjamin Clark",
            "role": "Game Developer, Blizzard",
            "description": "Benjamin is a game developer at Blizzard, working on AAA game titles. He is passionate about game design and enjoys creating immersive gaming experiences.",
            "image": "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg"
        },
        {
            "name": "Amelia Rodriguez",
            "role": "Content Strategist, Medium",
            "description": "Amelia is a content strategist at Medium, responsible for developing content strategies and managing editorial projects. She enjoys writing and is passionate about storytelling.",
            "image": "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
        },
        {
            "name": "Daniel Lewis",
            "role": "Site Reliability Engineer, GitHub",
            "description": "Daniel is a site reliability engineer at GitHub, ensuring the availability and performance of the platform. He is experienced in system administration and enjoys solving complex infrastructure problems.",
            "image": "https://c8.alamy.com/comp/2AMC079/portrait-of-young-professional-man-wearing-suit-and-tie-while-staning-in-the-office-and-looking-at-camera-2AMC079.jpg"
        },
        {
            "name": "Grace Walker",
            "role": "Technical Writer, Stripe",
            "description": "Grace is a technical writer at Stripe, creating documentation for developers using Stripe's APIs. She enjoys making complex technical information accessible to a broader audience.",
            "image": "https://img.freepik.com/premium-photo/young-happy-professional-african-american-business-man-wearing-suit-eyeglasses-working-laptop-office-sitting-desk-looking-camera-female-company-manager-executive-portrait-workplace_220770-5104.jpg"
        },
        {
            "name": "Henry Young",
            "role": "Business Analyst, Salesforce",
            "description": "Henry is a business analyst at Salesforce, focusing on analyzing business processes and identifying areas for improvement. He enjoys using data to drive business decisions.",
            "image": "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/09/H20170921_Career-Woman_6_Eng_16_02_prof.jpg"
        },
        {
            "name": "Chloe King",
            "role": "Marketing Specialist, HubSpot",
            "description": "Chloe is a marketing specialist at HubSpot, responsible for creating and executing marketing campaigns. She enjoys exploring new marketing strategies and tools.",
            "image": "https://blogs.vmware.com/education/files/2021/03/video.png"
        },
        {
            "name": "Lucas Scott",
            "role": "Machine Learning Engineer, NVIDIA",
            "description": "Lucas is a machine learning engineer at NVIDIA, working on developing and optimizing machine learning models. He is passionate about deep learning and AI applications.",
            "image": "https://img.freepik.com/premium-photo/attractive-cheerful-business-woman-working-laptop-modern-office_484651-7339.jpg"
        },
        {
            "name": "Liam Johnson",
            "role": "UI/UX Designer, Adobe",
            "description": "Liam is a UI/UX designer at Adobe, specializing in creating intuitive user interfaces for Adobe's creative software. He is passionate about user-centered design and enhancing user experiences.",
            "image": "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_1280.jpg"
        },
        {
            "name": "Emma Brown",
            "role": "Content Creator, YouTube",
            "description": "Emma is a content creator on YouTube, known for her insightful videos on digital marketing and social media strategies. She enjoys sharing her knowledge with her audience and fostering a community.",
            "image": "https://media.istockphoto.com/photos/portrait-of-creative-woman-standing-against-wall-picture-id1280057582?b=1&k=20&m=1280057582&s=170667a&w=0&h=TVYbAFT8gRqgMwStVr5qoDXRZP4bY4pS72rUg5um_NY="
        },
        {
            "name": "Noah Garcia",
            "role": "Data Analyst, Spotify",
            "description": "Noah is a data analyst at Spotify, analyzing user data to optimize personalized music recommendations. He enjoys diving deep into data insights and applying them to improve user satisfaction.",
            "image": "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/09/H20170921_Career-Woman_6_Eng_16_02_prof.jpg"
        }
        
    ];
    useEffect(() => {
        const filteredAttendees = attendees.filter((attendee) => {
            return nameStartsWith(attendee.name, search);
        });
        setFinalAttendees(filteredAttendees); 
    }, [search]);

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h1 className='text-7xl honk-heading  mb-11'> React Nexus </h1>
            <input
                type="text"
                placeholder="Search by name"
                className="w-1/2 p-4 mb-10 rounded-3xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
                <Attendees attendees={finalAttendees} />
                
        </div>
    )
}

function nameStartsWith(name, search) {
    return name.toLowerCase().startsWith(search.toLowerCase());
}

export default Search;