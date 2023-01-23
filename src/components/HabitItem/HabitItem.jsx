import './HabitItem.css'
import { FaTrash } from 'react-icons/fa'
const HabitItem = ({habit, handleCheckboxChange, handleDelete}) => {
    const days = JSON.parse(habit.days)
    return (
        <li className='habit'>
            <span>{habit.name}</span>
            <button className='delete-btn' onClick={() => handleDelete(habit)}><FaTrash /></button>
            <ul>
            {days.map((day, dayIndex) => (
                <li key={day.day} className="checkbox">
                
                <input
                    id={`${habit._id}${day.day}`}
                    type="checkbox"
                    checked={day.completed}
                    onChange={(event) => handleCheckboxChange(event, habit, dayIndex)}
                />
                <label htmlFor={`${habit._id}${day.day}`}>{day.day.slice(0, 3)}</label>
                <div className="toggle-button__icon"></div>
                </li>
            ))}
            </ul>
        </li>
    )
}

export default HabitItem;