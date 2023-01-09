import './App.css';
import { useState, useEffect } from 'react'
import AddHabit from './components/AddHabit/AddHabit';
import HabitsList from './components/HabitsList/HabitsList'
import Statistic from './components/Statistics/Statistics';

import shortid from "shortid"

const testData = require('./data/data')

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabitName, setNewHabitName] = useState('');

  useEffect(() => {
    
    setHabits(testData.data);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHabit = {
      id: shortid.generate(),
      name: newHabitName,
      days: daysOfWeek.map((day) => ({ day, completed: false })),
    };
  
    setHabits([...habits, newHabit]);
    setNewHabitName('');
  };
  
  return (
    <div className="App">
      <header>
        <div className="logo">Habity</div>
        <nav>
          <a href="/habits">Habits</a>
          <a href="/statistics">Statistics</a>
        </nav>
      </header>
      <div className="wrapper">
        <HabitsList habits={habits} setHabits={setHabits}/>
        <AddHabit handleSubmit={handleSubmit} newHabitName={newHabitName} setNewHabitName={setNewHabitName} />
        <Statistic habits={habits} />
      </div>
    </div>
  );
}

export default App;
