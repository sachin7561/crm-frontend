import React from 'react'
import PropTypes from 'prop-types'
import '../message-history/message-history.css'

export const MessageHistory = ({msg}) => {
    if(!msg) return null;
    console.log(msg);
  return msg.map((row,i)=>(
    <div key={i} className='message-history mt-3'>
    <div className='send font-weight-bold text-secondary'>
        <div className='sender'>
               {row.messageBy}
        </div>
        <div className='date'>{row.message}f</div>
    </div>     
</div>
  ));
   
  
}
MessageHistory.propTypes ={
    msg:PropTypes.array.isRequired,
}
