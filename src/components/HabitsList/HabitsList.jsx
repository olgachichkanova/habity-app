import HabitItem from "../HabitItem/HabitItem"
import AddHabit from '../AddHabit/AddHabit';


const HabitsList = ({habits, setHabits}) => {
    const handleCheckboxChange = (event, habitIndex, dayIndex) => {
        const newHabits = [...habits];
        newHabits[habitIndex].days[dayIndex].completed = event.target.checked;
        setHabits(newHabits);
      };
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
                    />
                ))}
            </ul>
        </div>
    )
}

export default HabitsList;