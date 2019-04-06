import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    

    const {
      image_url,
      publisher,
      recipe_id,
      source_url,
      title
    } = this.props.recipe;

    const{handleDetails} = this.props
    console.log(handleDetails);
    return (
      <React.Fragment>
                  
          
                  <div className="col-12 col-md-4">
                        <div className="card text-left">
                            <img src={image_url} alt="recipe" className="product-img"></img> 
                            <div className="card-body text-capitalize">
                                <h6 className="card-title">{title}</h6>
                                <h6 className="card-text text-warning text-slanted">Provided by {publisher} </h6>
                            </div>
                            <div className="card-footer">
                              <button className="btn btn-primary" onClick={handleDetails}>Details</button>
                              <a href={source_url} className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">Recipe Url</a> 
                            </div>
                      </div>
                  </div>
            
      </React.Fragment>
    )
  }
}
