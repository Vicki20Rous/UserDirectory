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
    
    searchEmployees = (filter) =>
    console.log("Search by name:", filter);
    const Result = this.state.employees.filter((employee) => {
      // let values = Object.values(employee).join("")toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({employees: Result }); 
    };
  
    handleInputChange = event => 
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log()
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search)
    console.log();
  };

  render() {
  return (
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
          <Card
          
          >
          {[...this.state.employees].map((item) => (
              <SearchResults
              firstName={item.firstName}
              lastName={item.lastName}
              phone={item.phone}
              email={item.email}
              picture={item.picture.thumbnail}
              city={item.city}
              key={item.key}
              />
            )
          ) : (
            <table className="table">
            No Results to Display</table>

          )}
        </Card>
        </Container>
        </div>
      
    );
  }
}
  
export default SearchEmployee;