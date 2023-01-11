import './AddHabit.css';
import shortid from "shortid"
import { useState } from 'react'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AddHabit = ({habits, setHabits}) => {
  const [newHabitName, setNewHabitName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHabit = {
      id: shortid.generate(),
      name: newHabitName,
      days: daysOfWeek.map((day) => ({ day, completed: false })),
    };
  
    setHabits([...habits, newHabit]);
    setNewHabitName('');
  };
    
    const handleChange = (event) => {
        if (event.target.name === 'name') {
          setNewHabitName(event.target.value);
        } 
      };
    
    return (
      <form onSubmit={handleSubmit} className="form__box">
        <input type="text" name="name" value={newHabitName} onChange={handleChange} />
        <button type="submit">Add habit</button>
      </form>
    )
}

export default AddHabit;