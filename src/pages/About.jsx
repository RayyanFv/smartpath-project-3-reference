import React, { useState, useRef } from 'react';
import '../styles/about.css'; // Import file CSS untuk styling

const About = () => {
    const [name, setName] = useState('');
    const [complaint, setComplaint] = useState('');
    const complaintRef = useRef(null); // Deklarasi refs menggunakan useRef

    const handleComplaintChange = (e) => {
        setComplaint(e.target.value);
    };

    const handleSubmit = () => {
        // Kirim keluhan ke server atau lakukan tindakan yang sesuai
        alert(`Thank you, ${name}! Your complaint has been submitted: ${complaint}`);
        // Reset input keluhan
        setComplaint('');
        // Fokus kembali ke textarea setelah pengiriman
        complaintRef.current.focus();
    };

    return (
        <div className="about">
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget gravida arcu.
                    Phasellus bibendum magna vitae nunc pulvinar, id vehicula libero efficitur.
                    Nulla facilisi. Sed in fermentum libero. Proin et convallis justo.
                </p>
                <p>
                    Fusce vestibulum justo nec enim ultricies, non ultrices justo
                    malesuada. Maecenas nec sapien sed nunc tincidunt tincidunt
                    vel nec urna. Mauris vel tincidunt ligula. Vivamus vel turpis
                    nec lectus scelerisque vestibulum. Donec tincidunt fermentum
                    diam, ut auctor lacus commodo at. In non diam a arcu feugiat
                    fermentum. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Morbi vehicula ligula at
                    ipsum lacinia scelerisque.
                </p>
            </div>
            <div className="complaint-form">
                <h2>Submit Your Complaint</h2>
                <textarea
                    ref={complaintRef} // Menghubungkan ref dengan textarea
                    value={complaint}
                    onChange={handleComplaintChange}
                    placeholder="Write your complaint here..."
                ></textarea>
                <p>Your Complaint: {complaint}</p>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    );
};

export default About;
