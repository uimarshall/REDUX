import React, { Component } from "react";
import Product from "./Product";

export class ProductList extends Component {
	render() {
		return (
			<div>
				<h2>Product list</h2>
				<Product />
			</div>
		);
	}
}

export default ProductList;
