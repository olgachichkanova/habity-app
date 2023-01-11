import HabitItem from "../HabitItem/HabitItem"
import AddHabit from '../AddHabit/AddHabit';


const HabitsList = ({habits, setHabits}) => {
    const handleCheckboxChange = (event, habitIndex, dayIndex) => {
        const newHabits = [...habits];
        newHabits[habitIndex].days[dayIndex].completed = event.target.checked;
        setHabits(newHabits);
      };

      const handleDelete = (habit) => {
        setHabits(prevHabit => prevHabit.filter(i => i.id !== habit.id))
      }
    return (
        <div>
            <AddHabit 
                habits={habits} 
                setHabits={setHabits} 
            />
            <h1>Your habits</h1>
            <ul>
                {habits.map((habit, habitIndex) => (
                    <HabitItem 
                        key={habit.id} 
                        habit={habit} 
                        habitIndex={habitIndex} 
                        handleCheckboxChange={handleCheckboxChange}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    )
}

export default HabitsList;