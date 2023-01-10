import './App.css';
import { useState, useEffect } from 'react'

import HabitsList from './components/HabitsList/HabitsList'
import Statistic from './components/Statistics/Statistics';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="logo">Habity</div>
          <nav>
            <Link to="/habits">Habits</Link>
            <Link to="/statistics">Statistics</Link>
          </nav>
        </header>
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<Navigate to={"/habits"}/>}/>
            <Route exact path="/habits" element={
              <HabitsList 
                habits={habits} 
                setHabits={setHabits} 
                handleSubmit={handleSubmit} 
                newHabitName={newHabitName} 
                setNewHabitName={setNewHabitName}
              />
              } />
            <Route path="/statistics" element={<Statistic habits={habits} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
