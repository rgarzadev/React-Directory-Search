const UserRow = (props) => {

    const {user} = props;
    const image = user.picture.large;
    const name = user.name.first + " " + user.name.last;
    const phone = user.phone;
    const email = user.email;
    const dob = user.dob.date.substring(0, 10);

    return (
        <tr>
            <td><img src={image} alt=""/></td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    );
};

export default UserRow;