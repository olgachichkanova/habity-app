import HabitItem from "../HabitItem/HabitItem"
import AddHabit from '../AddHabit/AddHabit';

const url = process.env.REACT_APP_BASE_URL;

const HabitsList = ({habits, loadData}) => {
    const deleteData = async (habit) => {
        try {
            const res = await fetch(`${url}/${habit._id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            loadData()
        } catch (error) {
            console.error(error);
        }
    }
    const updateData = async (event, habit, dayIndex) => {
        try {
            console.log(habit._id)
            habit.days = JSON.parse(habit.days);
            habit.days[dayIndex].completed = event.target.checked;
    
            const formData = new URLSearchParams();
            formData.append("name", habit.name);
            formData.append("days", JSON.stringify(habit.days));
    
            const res = await fetch(`${url}/${habit._id}`, {
                method: 'PUT',
                body: formData.toString(),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            loadData()
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div>
            <AddHabit loadData={loadData} />
            <h1>Your habits</h1>
            <ul>
                {habits.map((habit) => (
                    <HabitItem 
                        key={habit._id} 
                        habit={habit} 
                        handleCheckboxChange={updateData}
                        handleDelete={deleteData}
                    />
                ))}
            </ul>
        </div>
    )
}

export default HabitsList;