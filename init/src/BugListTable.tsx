import { Bug } from "./Bug";
import './index.css'
const BugListTable =(props: {bugs: Bug[], onDeleteBug: Function}) => {
 const {bugs, onDeleteBug} =props;
 const resolvedPressed = (id: string) => {
   onDeleteBug(id);  
 };
return <table>
    <thead>
        <tr>
            <th>Description</th>
            <th>Priority</th>
            <th></th>

        </tr>
    </thead>
    <tbody>
        {bugs.length ===0 && <tr><td>No bugs Created</td></tr>}
        {bugs.length > 0 && bugs.map(bug => <tr className="row" key={bug.id}>
            <td className="wrap">{bug.description}</td>
            <td>{bug.priority}</td>
            <td><button onClick={() => resolvedPressed(bug.id)}>Resolved</button></td>
            </tr>)}
    </tbody>
</table>
}

export default BugListTable; 