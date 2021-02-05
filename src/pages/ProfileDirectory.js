import React, { Component } from "react";
import API from "../utils/api";
import Hero from "../components/Hero";
import SearchHeadings from "../components/SearchHeadings";
import SearchBox from "../components/SearchBox";
import Wrapper from "../components/Wrapper";


class EmployeeDirectory extends Component {
  state = {
    search: "",
    ascending: "",
    location: "",
    results: []
  };

  // When the component mounts, load available employees to be displayed
  componentDidMount() {
    this.loadEmployees();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value.toLowerCase() });
  };

  // sort in ascending or descending order
  handleSort = (event) => {
    event.preventDefault();
    const { ascending } = this.state;
    if (ascending === false || ascending === "") {
      // A to Z
      this.handleSortAZ();
    } else if (ascending === true) {
      // Z to A
      this.handleSortZA();
    } else if (ascending === true) {
      // location
      this.handleSortLocation();
    }
    return;
  };

  // sort A to Z
  handleSortAZ = () => {
    this.setState({
      results: this.state.results.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      ),
      ascending: true,
    });
  };

  // sort Z to A
  handleSortZA = () => {
    this.setState({
      results: this.state.results.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      ),
      ascending: false,
    });
  };

  // load employee list
  loadEmployees = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          results: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const filter = this.state.results.filter((results) =>
      results.name.first.toLowerCase().includes(this.state.search)
    );

    return (
      <Wrapper>

        <div>
          <h1 className="text-center"><Hero /></h1>
          
          <SearchBox
            handleSort={this.handleSort}
            handleInputChange={this.handleInputChange}
          ></SearchBox>

          <SearchHeadings results={filter}></SearchHeadings>
        </div>
      </Wrapper>
    );
  }
}

export default EmployeeDirectory;