import React from 'react'



function Profile({count, profile}) 
{



  return (

    <div>
        <ul className='list-group'>
            <li className='list-group-item'><p className='h2'> userId {count}</p></li>
            <li className='list-group-item'><strong>nom:{profile.name}</strong></li>
            <li className='list-group-item'><strong>pseudo:{profile.username}</strong></li>
            <li className='list-group-item'><strong>email:{profile.email}</strong></li>
        </ul>   
    </div>
  )
}

export default React.memo(Profile)