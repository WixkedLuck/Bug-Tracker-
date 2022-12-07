import { FormEvent, useState } from 'react'
import knight from './assets/knights.svg';
import virus from './assets/virus.svg';
import './App.css'
import { Bug, BugPriority } from './Bug';
import {v4 as uuid} from 'uuid';
import BugListTable from './BugListTable';
import Navbar from './components/pages/Navtab'
import Lottie from "lottie-react";
import hacker from "./assets/happy-hacker.json";
function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugList, setBugList] = useState<Bug[]>([]);

  const addBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug: Bug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    }

    setBugList(
      [
        ...bugList,
        newBug,
      ]
    );

    setNewBugDescription('');
    setNewBugPriority('Medium');
  };

  const deleteBug = (id: string) => {
    const bugs = bugList.filter(bug => bug.id !== id);

    setBugList(bugs);
  }

  return (
    <div className="app">
    <Navbar/>
    <Lottie className='sized' animationData={hacker} loop={true} />
      {/* <img className='bugs' src={knight}></img> */}
      <h1><img className='virus' src={virus}></img> Bug Tracker<img className='flip-img' src={virus}></img></h1>
      
      <BugListTable bugs={bugList} onDeleteBug={(id: string) => deleteBug(id)}></BugListTable>
      <form className="add-new-bug-form" onSubmit={addBug}>
        <label htmlFor="newBugDescription">New Bug Description: </label>
        <input required data-testid="newbug-description" id="newBugDescription" type="text" onChange={event => setNewBugDescription(event.target.value)} value={newBugDescription} />
        <label htmlFor="newBugPriority">New Bug Priority: </label>
        <select onChange={event => setNewBugPriority(event.target.value)} value={newBugPriority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button  data-testid="add-bug" type="submit">Add New Bug</button>
      </form>
    </div>
  );
}

export default App
