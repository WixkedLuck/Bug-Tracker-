import { Bug } from "./Bug";
import './index.css'
const BugListTable =(props: {bugs: Bug[], onDeleteBug: Function}) => {
 const {bugs, onDeleteBug} =props;
 const resolvedPressed = (id: string) => {
   onDeleteBug(id);  
 };
return <table className="table">
    <thead>
        <tr>
            <th></th>
            <th>Description</th>
            <th></th>
            <th>Priority</th>
            <th></th>
            <th></th>

        </tr>
    </thead>
    <tbody>
    
        {bugs.length ===0 && <tr className="none">You did it! No bugs reported</tr>}
        {bugs.length > 0 && bugs.map(bug => <tr className="" key={bug.id}>
        <th scope="row"></th>
            <td className="wrap">{bug.description}</td>
            <th scope="row"></th>
            <td>{bug.priority}</td>
             <th scope="row"></th>
            <td><button onClick={() => resolvedPressed(bug.id)}>Resolved</button></td>
            </tr>)}
    </tbody>
</table>
}

export default BugListTable; 