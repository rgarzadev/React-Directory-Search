import './Header.css';

const Header = (props) => {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.headerText}</h1>
                <p className="lead">{props.headerSubText}</p>
            </div>
        </div>
    );
};

export default Header;