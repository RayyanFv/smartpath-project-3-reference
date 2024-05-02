import React from 'react';
import '../styles/footer.css'; // Import file CSS untuk styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                        <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 MyCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
