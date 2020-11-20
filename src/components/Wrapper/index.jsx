function Wrapper (props){
    return (
        <div className={props.divName}>
            {props.children}
        </div>
    );
};

export default Wrapper;