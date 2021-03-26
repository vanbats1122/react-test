import React from 'react'
import './UserDetail.css'

function UserDetail( {user}) {
    return (
       
        
        <div className="detail"> 
            <img src={`${user.pic}`} />
            <div className="student__info">
            <div className="bold">{`${user.firstName} ${user.lastName}`.toUpperCase()}</div>
            <div> &nbsp; &nbsp; Email: {`${user.email}`}</div>
            <div> &nbsp; &nbsp; Skills: {`${user.skill}`}</div>
            <div> &nbsp; &nbsp; Average: {`${user.grades.reduce((sum,curr) => 
                sum + Number(curr),0)/user.grades.length}%
            `}</div>
            </div>
        </div>
        
    )
}

export default UserDetail
