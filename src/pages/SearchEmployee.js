import React, { Component } from "react";
import API from "../utils/api";
import Hero from "../components/Hero";
import SearchResults from "../components/SearchResults";
import SearchBox from "../components/SearchBox";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Card from "../components/Card";


class SearchEmployee extends Component {
  state = {
    search: "",
    employees: []
  };

 
  componentDidMount() {
    API.searchResults().then((res) => {
        console.log(res.data.results);
        
        const UserProfile = res.data.results.map((employee) =>({
            firstName: employee.name.first,
            lastName: employees.name.last,
            picture: employee.picture.medium,
            phone: employee.phone,
            email: employee.email,
            city: employee.location.city,
          
          }));
          this.setState({ 
            results: UserProfile,
        });
      })
      .catch(err => console.log(err));
  };
    
    searchEmployees = (filter) => {
    console.log("Search", filter);
    const filteredlist = this.state.employees.filter((employee) => {
      var values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({employees: filteredlist }); 
    };
  
    handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search)
    console.log();
  };

  render() {
  return (
    <Wrapper>
      <Container>
        <div>
        <h1 className="text-center"><Hero /></h1>
        <div>
        <SearchBox
            value={this.state.state}
            handleInputChange={thishandleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <Card>
          
        <div>  
          {[...this.state.employees].map((item) => (
              <SearchResults
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              phone={this.props.phone}
              email={this.props.email}
              picture={this.props.picture.thumbnail}
              city={this.props.city}
              />
            )};
        </div>
      <Container>
    <Wrapper>
      
    
    }
  }
}

export default SearchEmployee;