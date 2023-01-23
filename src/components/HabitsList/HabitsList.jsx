import HabitItem from "../HabitItem/HabitItem"
import AddHabit from '../AddHabit/AddHabit';


const HabitsList = ({habits, loadData}) => {
      const deleteData = (habit) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/${habit._id}`, {
            method: 'DELETE'
        })
        .then(res => {
            loadData()
            if (!res.ok) {
                throw new Error(res.statusText);
            }
        })
        .catch(error => {
            console.error(error);
        });
      }
      const updateData = (event, habitIndex, dayIndex) => {
        const newHabit = habits[habitIndex];
        newHabit.days = JSON.parse(newHabit.days)
        newHabit.days[dayIndex].completed = event.target.checked;

        const formData = new URLSearchParams();
        formData.append("name", newHabit.name);
        formData.append("days", JSON.stringify(newHabit.days));
    
        fetch(`${process.env.REACT_APP_BASE_URL}/${newHabit._id}`, {
            method: 'PUT',
            body: formData.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(res => {
            loadData()
            if (!res.ok) {
                throw new Error(res.statusText);
            }
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <div>
            <AddHabit loadData={loadData} />
            <h1>Your habits</h1>
            <ul>
                {habits.map((habit, habitIndex) => (
                    <HabitItem 
                        key={habit.id} 
                        habit={habit} 
                        habitIndex={habitIndex} 
                        handleCheckboxChange={updateData}
                        handleDelete={deleteData}
                    />
                ))}
            </ul>
        </div>
    )
}

export default HabitsList;