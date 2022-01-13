import './css/Assignments.css'
import Button from '@material-ui/core/Button'
import React from 'react'
import { getClasses, getAssignments, getSubmissions } from './Getter'

export default function Assignments(props) {
    const id = props.state.id
    const username = props.state.username
    const isAdmin = props.state.isAdmin
    const isTeacher = props.state.isTeacher

    getClasses()
    if(!isAdmin && !isTeacher){
        getAssignments()
        getSubmissions()
      }
    
    return (
        <div className='assignments'>
            <p> 
                <Button onClick={()=> getClasses()} color="secondary" type="contained">
                  Fetch
                </Button>
                {username}-{id}
                <br></br>
                --
            </p>
        </div>
    )
}
