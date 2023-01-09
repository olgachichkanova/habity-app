import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = ({ habits }) => {
  const data = habits.map((habit) => {
    const completedDays = habit.days.filter((day) => day.completed).length;
    return { name: habit.name, completed: completedDays };
  });

  return (
    <div>
      <h2>Statistic</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart  data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Bar dataKey="completed" fill="#fbe3e1" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default Statistic;