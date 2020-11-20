const Search = (props) => {

    return (
        <div className="active-cyan-3 active-cyan-4 mb-4">
            <input
            onChange={props.handleSearch}
            type="text"
            className="form-control"
            placeholder="Search users"
            />
      </div>
    )
}

export default Search;