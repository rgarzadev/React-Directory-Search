import UserRow from "../UserRow";

const Table = (props) => {

    return (
        <table className="table">
        <tr>
          <td>Photo</td>
          <td><button className="btn btn-info" onClick={props.sort}>Sort by name</button></td>
          <td>Phone</td>
          <td>Email</td>
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