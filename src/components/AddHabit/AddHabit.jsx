import './AddHabit.css';

const AddHabit = ({handleSubmit, newHabitName, setNewHabitName}) => {
    
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