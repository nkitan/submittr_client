import './css/Assignments.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import { BorderColor } from '@material-ui/icons'

export default function Assignments() {
    return (
        <div class='assignments'>
            <Button onClick={()=>alert('hello')} color="secondary" type="contained">
                Refresh
            </Button>
            <p>
                --
            </p>
        </div>
    )
}
