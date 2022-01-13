import '../css/UserType.css';
import React from 'react'

export default class UserType extends React.Component {
    render() {
        return (
            <div className='usertype'>
                <p>{this.props.usertype}</p>
                <p>{this.props.userid}</p>
            </div>
        )
    }
}
