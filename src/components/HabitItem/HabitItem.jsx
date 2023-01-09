import './HabitItem.css'

const HabitItem = ({habit, habitIndex, handleCheckboxChange}) => {
    return (
        <li className='habit'>
            <span>{habit.name}</span>
            {/* <button onClick={() => handleEdit(habitIndex)}>Edit</button> */}
            {/* <button onClick={() => handleDelete(habitIndex)}>Delete</button> */}
            <ul>
            {habit.days.map((day, dayIndex) => (
                <li key={day.day} className="checkbox">
                
                <input
                    id={`${habit.name}${day.day}`}
                    type="checkbox"
                    checked={day.completed}
                    onChange={(event) => handleCheckboxChange(event, habitIndex, dayIndex)}
                />
                <label htmlFor={`${habit.name}${day.day}`}>{day.day.slice(0, 3)}</label>
                <div className="toggle-button__icon"></div>
                </li>
            ))}
            </ul>
        </li>
    )
}

export default HabitItem;