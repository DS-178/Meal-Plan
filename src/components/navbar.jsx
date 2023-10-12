import React, { Component } from 'react'

class navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-light nav-bg">
                <div className="container">
                    <a className="navbar-brand navbar-name">
                        Lotus<span className='navbar-name-second'>Meditation</span>
                    </a>
                    <a className="navbar-brand">
                        <img className='nav-logo' src='/imgs/lotus-flower.png' alt=''/>
                    </a>
                </div>
            </nav>
        );
    }
}
 
export default navbar;
