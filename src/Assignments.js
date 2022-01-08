import './css/Assignments.css'
import React from 'react'
import Button from '@material-ui/core/Button'

export default function Assignments() {
    return (
        <div className='assignments'>
            <Button onClick={()=>alert('hello')} color="secondary" type="contained">
                Refresh
            </Button>
            <p>
                --
            </p>
        </div>
    )
}
