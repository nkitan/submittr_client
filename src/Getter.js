import { databasr_port, submittr_host } from './Config';
import { call } from './Uplink';

function getAssignments(){
    console.log('Got Assignments')
}

function getSubmissions(){
    console.log('Got Submissions')  
}


function getClasses(){
    call(submittr_host + databasr_port + '/dbsr/fetch', 'GET', { 'Content-Type': 'application/json' }, "").then(response => {
      console.log(response)
    }).catch(error => {
      console.log('could not contact server')
    })
}

export {getClasses, getAssignments, getSubmissions}