import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render () {
        return (
            <div className="footer col-md-12">
                <div>I literally have nothing important enough to be 'copyrighted'.<br />The footer only exists to make this site look more important.</div>
                <div>© 2017 Austin Rovge | All Rights Reserved</div>
            </div>
        );
    }
}