import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./components/Home";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
// import Recipe from './components/Recipe';
// import RecipeSearch from './components/RecipeSearch';
import { recipes } from './tempList';
import './App.css';

class App extends Component {
    state = {
        recipes:recipes,
        url:"https://www.food2fork.com/api/search?key=32d73efd194ea46bef904b8cd515ac2b&q=chicken%20breast&page=2",  
        dtails_id:35375,
        pageIndex:1
    };

    async getRecipes(){
      try{ 
            
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            this.setState({
              recipes:jsonData.recipes
            });
          }catch (error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getRecipes()
    }


    displayPage = (index) => {
      switch(index){
        default:
        case 1:
          return(<RecipeList myrecipes={this.state.recipes} 
          handleDetails={this.handleDetails}/>);
        case 0:
          return(<RecipeDetails id={this.state.dtails_id} handleIndex={this.handleIndex}/>) 
      }
    }

    handleIndex = index => {
      this.setState({
          pageIndex:index
      });
    };

    handleDetails = (index, id) =>{
      this.setState({
        pageIndex:index,
        dtails_id:id
      });
    };


  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
          {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
