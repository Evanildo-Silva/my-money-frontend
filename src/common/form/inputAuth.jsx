import React from 'react'

export default props => {
  if (!props.hide) {
    return (
      <div className="form-group has-feedback">
        <input {...props.input}
          className='form-control'
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          type={props.type} />
        <span className={`glyphicon glyphicon-${props.icon}
  form-control-feedback`}></span>
      </div>
    )
  } else {
    return null
  }
}
