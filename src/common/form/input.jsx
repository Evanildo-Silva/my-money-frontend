import React from 'react'

export default props => (
  <input
    className='form-control'
    {...props.input}
    type={props.type}
    placeholder={props.placeholder}
    readOnly={props.readOnly}
  />
)