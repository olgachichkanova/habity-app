import React, { useEffect } from 'react';
import axios from 'axios';


const HabitTracker = ({testData ,setHabits, habits, setNewHabitName, newHabitName }) => {
  
  

  
  
  // to fix
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios('/habits');
  //     setHabits(result.data);
  //   };
  //   fetchData();
  //   setHabits(testData);
  // }, []);

  

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newHabit = {
//       name: newHabitName,
//       frequency: newHabitFrequency,
//       days: daysOfWeek.map((day) => ({ day, completed: false })),
//     };

//     const result = await axios.post('/habits', newHabit); //
//     setHabits([...habits, result.data]);
//     setNewHabitName('');
//     setNewHabitFrequency('');
//   };



//   const handleCheckboxChange = async (event, habitIndex, dayIndex) => {
//     const newHabits = [...habits];
//     newHabits[habitIndex].days[dayIndex].completed = event.target.checked;
//     setHabits(newHabits);

//     // to fix
//     await axios.put(`/habits/${habits[habitIndex].id}`, newHabits[habitIndex]); //
//   };

//   const handleEdit = (habitIndex) => {
//     // show a form to edit the habit name and frequency
//   };

//   const handleDelete = async (habitIndex) => {
//     const habitId = habits[habitIndex].id;
//     const newHabits = habits.filter((_, index) => index !== habitIndex);
//     setHabits(newHabits);
//     // to fix
//     await axios.delete(`/habits/${habitId}`); //
//   };


  return (
    <div>
      <h1>Habit Tracker</h1>
      <ul>
        {habits.map((habit, habitIndex) => (
          <li key={habit.id}>
            <span>{habit.name}</span>
            {/* <button onClick={() => handleEdit(habitIndex)}>Edit</button> */}
            {/* <button onClick={() => handleDelete(habitIndex)}>Delete</button> */}
            <ul>
              {habit.days.map((day, dayIndex) => (
                <li key={day.day}>
                  {day.day}:
                  <input
                    type="checkbox"
                    checked={day.completed}
                    // onChange={(event) => handleCheckboxChange(event, habitIndex, dayIndex)}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;

