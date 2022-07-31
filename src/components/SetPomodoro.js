import React from 'react'
import Button from './Button'

const SetPomodoro = () => {
  return (
    <div className='form-container'>
        <form noValidate>
            <div className='input-wrapper'>
                <input className='input' name="work" onChange={handleChange} value=''></input>
                <input className='input' name="shortBreak" onChange={handleChange} value=''></input>
                <input className='input' name="longBreak" onChange={handleChange} value=''></input>
            </div>
            <Button/>

        </form>
    </div>
  )
}

export default SetPomodoro