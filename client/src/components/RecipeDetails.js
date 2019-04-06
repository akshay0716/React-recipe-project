import React, { Component } from 'react'
import {recipe} from '../tempDetails';



export default class RecipeDetails extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         recipe:recipe,
    //         url:`https://www.food2fork.com/api/get?key=747be3ae75ce9bf2fd20b283c1749525&rId=${this.props.id}`
    //     };

    // }

    // async getRecipe() {
        // try{
        //     const data = await fetch(this.state.url);
        //     const jsonData = await data.json();
        //     this.setState({
        //         recipe:recipe,

        //     });
        // }catch(error){
        //     console.log(error);
        // }
    // }

    // async componentDidMount(){
    //     try{
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipe:jsonData.recipe

    //         });
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    state = {
        recipe:recipe
        
    };

    async componentDidMount(){
        const id =this.props.id;
        const url=`https://www.food2fork.com/api/get?key=32d73efd194ea46bef904b8cd515ac2b&rId=${id}`
            try{
                    const data = await fetch(url);
                    const jsonData = await data.json();
                    this.setState((state,props)=>{
                        return {recipe:jsonData.recipe}
                    },()=>{});
                }catch(error){
                    console.log(error);
                }
    }


  render() {
      console.log(this.props.id);
    const{
        f2f_url,
        image_url,
        ingredients,
        publisher,
        publisher_url,
        source_url,
        title
    } = this.state.recipe;

    const{handleIndex}= this.props
    
    // console.log(this.state.recipe);
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 my-3">
                    <img src={image_url} alt="recipe" className="single-product-img"></img>
                    <button className="btn btn-warning text-capitalize mt-5" onClick={()=>handleIndex(1)}>Back to Recipe List</button>
                </div>
                <div className="col-12 col-md-6 my-3">
                    <h3 className="text-uppercase">{title}</h3>
                    <p className="text-warning text-slanted">Provided by {publisher}</p>
                    <a href={publisher_url} className="btn btn-primary mt-2 mr-2" target="_blank" rel="noopener noreferrer">Publisher Webpage</a>
                    <a href={source_url} className="btn btn-warning mt-2 mx-2" target="_blank" rel="noopener noreferrer">Recipe Url</a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">Ingradients</h2>
                        {
                            ingredients.map((item,index)=>{
                                return(
                                    <li key={index} className="list-group-item text-slanted">{item }</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
