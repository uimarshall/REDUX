import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

// ProductConsumer will provide our comp wt props frm the Context store for consumptn
import { ProductConsumer } from "../context";

export class ProductList extends Component {
	render() {
		// console.log(this.state.products);
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="get our" title="produts" />
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Product product={product} key={product.id} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ProductList;
