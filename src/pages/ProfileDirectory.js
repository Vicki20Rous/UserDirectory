import React, { Component } from "react";
import API from "../utils/api";
import Hero from "../components/Hero";
import SearchHeadings from "../components/SearchHeadings";
import SearchBox from "../components/SearchBox";
import Wrapper from "../components/Wrapper";


class EmployeeDirectory extends Component {
  state = {
    name: "",
    image: "",
    results: []
  };

 
  componentDidMount() {
    this.loadEmployees();
  }

  handleBtnClick = event => {
    const btnType = event.target.attributes.getEmployees().value;
    
  };

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

          <SearchHeadings results={prop.results}></SearchHeadings>
        </div>
      </Wrapper>
    );
  }
}

export default EmployeeDirectory;