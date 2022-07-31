import React, { useState } from 'react'
import Button from './Button'

const SetPomodoro = () => { 
    
  const [newTimer, setNewTimer] = useState({
    // Default values for inputs. active here indicates which time to run by default
    work: 0.3,
    short: 0.2,
    long: 1,
    active: 'work'
  })

  const handleChange = input => {
    // Destructuring name and value out of right hand value in order to use in switch statement
    const {name, value} = input.target
    switch(name) {
        case 'work':
            setNewTimer({
                ...newTimer,
                work: parseInt(value)
            })
            break;
        case 'shortBreak':
            setNewTimer({
                 ...newTimer,
                short: parseInt(value)
            })
            break;
        case 'longBreak':
             setNewTimer({
             ...newTimer,
             long: parseInt(value)
        })
            break;

        default:
            break;
        
    }
    console.log(newTimer)
  }

  const handleSubmit = e => {
    // Prevents browser from refreshing to default values when submitting new input values
    e.preventDefault()
  }
  return (
    <div className='form-container'>
        <form noValidate onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                {/* Value =  default value unless changed with input */}
                <input className='input' name="work" onChange={handleChange} value={newTimer.work}></input>
                <input className='input' name="shortBreak" onChange={handleChange} value={newTimer.short}></input>
                <input className='input' name="longBreak" onChange={handleChange} value={newTimer.long}></input>
            </div>
            <Button title='Set Timer' _callback={handleSubmit} />

        </form>
    </div>
  )
}

export default SetPomodoro