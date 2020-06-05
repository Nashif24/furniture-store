import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button"

export default class Details extends Component {
	render() {
		return(
			<ProductConsumer>

				{value => {
					const {id, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container py-5">
					{/* title */}
						<div className="row">

							<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
								<h1>{title}</h1>	
							</div>
							
						</div>
					{/*end title */}
				{/*product info */}

					<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3 text-captialize">
					<img className="img-fluid" alt="product" src={img} />
						
					</div>
				{/*product text */}
					<div className="col-10 mx-auto col-md-6 my-3 text-captialize">
						<h4 className="text-black">
							<strong>
								Price : <span>R</span>{price}
							</strong>
						</h4>
						<h4 className="text-captialize font-weight-bold mt-3 mb-0">
							Some Info About This Product
						</h4>
						<p className="text-muted lead">
							{info}
						</p>
				{/*buttons*/}
					<div>
						<Link to='/'>
						<ButtonContainer>
						 	back to product
						</ButtonContainer>
							
						</Link>
						<ButtonContainer cart
							disabled={inCart?true:false}
							onClick={() => {
								value.addToCart(id);
								value.openModal(id);
							}}
						>
							{inCart? "inCart" : "add to cart"}

						</ButtonContainer>
					</div>

					</div>
						
					</div>	
							
						</div>
						)
						}
						}

			</ProductConsumer>
			)
	}
}