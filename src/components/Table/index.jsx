import UserRow from "../UserRow";
import './Table.css';


const Table = (props) => {

    return (
        <table>
        <tr>
          <td>image</td>
          <td><button className="btn btn-info" onClick={props.sort}>Sort by name</button></td>
          <td>phone</td>
          <td>email</td>
          <td>DOB</td>
        </tr>
        {props.users.map((user) => {
          return (
            <UserRow user={user} />
          )
        })}
      </table>
  
    )
}

export default Table;