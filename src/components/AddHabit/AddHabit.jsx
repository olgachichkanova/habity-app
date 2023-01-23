import './AddHabit.css';
import shortid from "shortid"
import { useState } from 'react'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const days = JSON.stringify(daysOfWeek.map((day) => ({day, completed:false})))

const AddHabit = ({loadData}) => {
  const [newHabit, setNewHabit] = useState('');

  const postData = (e, habit) => {
    e.preventDefault()

    const formData = new URLSearchParams();
    formData.append("name", habit)
    formData.append("days", days)
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    };
    fetch(process.env.REACT_APP_BASE_URL, requestOptions).then((res) => loadData());
    setNewHabit("")
  };

  const handleChange = (event) => {
      if (event.target.name === 'name') {
        setNewHabit(event.target.value);
      } 
    };
    
    
    return (
      <form onSubmit={(e) => postData(e, newHabit)} className="form__box">
        <input type="text" name="name" value={newHabit} onChange={handleChange} />
        <button type="submit">Add habit</button>
      </form>
    )
}

export default AddHabit;