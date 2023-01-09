import HabitItem from "../HabitItem/HabitItem"
import AddHabit from '../AddHabit/AddHabit';

const HabitsList = ({habits, setHabits, handleSubmit, newHabitName, setNewHabitName}) => {
    const handleCheckboxChange = (event, habitIndex, dayIndex) => {
        const newHabits = [...habits];
        newHabits[habitIndex].days[dayIndex].completed = event.target.checked;
        setHabits(newHabits);
      };
    return (
        <div>
            <h1>Your habits</h1>
            <ul>
                {habits.map((habit, habitIndex) => (<HabitItem key={habit.id} habit={habit} habitIndex={habitIndex} handleCheckboxChange={handleCheckboxChange}/>))}
            </ul>
            <AddHabit handleSubmit={handleSubmit} newHabitName={newHabitName} setNewHabitName={setNewHabitName} />
        </div>
    )
}

export default HabitsList;