import React, { Component } from 'react';
import './Contact.css'
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            online: props.online
        }
    }
    render () {
        const { name, avatar } = this.props
        return (
            <div className='Contact'>
                <img className='avatar' src={avatar} alt={name + 'avatar'}/>
                <div>
                     <h4 className='name'>{name}</h4>
                    <div className='status' 
                    onClick={event => {
                        const newState = !this.state.online;
                        this.setState({ online: newState });
                    }} >
                        <div className={this.state.online ? 'status-online': 'status-offline'}></div>
                        <p className='status-text'>{this.state.online ? 'online': 'offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    online:PropTypes.bool,
}

export default Contact