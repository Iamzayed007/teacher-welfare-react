import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const credit = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <p>
                {credit} Zayed
            </p>

        </div>
    );
};

export default Footer;