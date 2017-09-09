import React from 'react';
import './Logo.scss';

import logo from '../../data/logo-hrn.png';

const Logo = () => (
    <div className="hrn-logo">
        <a>
            <img src={logo} alt="HRN" />
        </a>
    </div>
);

export default Logo;
