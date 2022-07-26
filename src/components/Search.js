import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.props.handleSearchInputChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.inputChange}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
