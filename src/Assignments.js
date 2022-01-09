import './css/Assignments.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import { refreshToken } from './Uplink'

export default function Assignments(props) {
    return (
        <div className='assignments'>
            <Button onClick={()=> refreshToken()} color="secondary" type="contained">
                Refresh
            </Button>
            <p>
                --
            </p>
        </div>
    )
}
