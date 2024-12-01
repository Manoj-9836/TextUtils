import React from 'react'

export default function Alert(props) {
    const captalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
      <div style={{height: '40px'}}>
        {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{captalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
      </div>
  )
}
