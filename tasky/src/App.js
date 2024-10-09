import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", description: "Clean Floors & Windows", deadline: "Today" }
    ]
  });

    return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
    />
  ))} 
    </div>
  );
}

export default App;