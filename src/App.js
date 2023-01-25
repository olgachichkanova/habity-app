import './App.css';
import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import HabitsList from './components/HabitsList/HabitsList'
import Statistic from './components/Statistics/Statistics';
const url = process.env.REACT_APP_BASE_URL

function App() {
  const [habits, setHabits] = useState([]);
  

  const loadData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setHabits(result);
      })
      .catch(() => {
        console.log('error')
      });
  };

  useEffect(loadData, [habits.length]);
  
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
                loadData={loadData}
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
