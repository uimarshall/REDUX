import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// Create Context obj which comes wt 2 comps(Provider&Consumer)
const ProductContext = React.createContext();
// 1. Provider: will provide info for all our application
// 1. Consumer: will pass props down to a child comp

class ProductProvider extends Component {
	state = {
		products: storeProducts,
		detailProduct: detailProduct
	};

	handleDetail = () => {
		console.log("hello frm detail");
	};
	addToCart = () => {
		console.log("hello frm cart");
	};
	render() {
		return (
			// we return the 'ProductContext' & the 'Provider comp'

			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart
				}}
			>
				{/* return the children that will be inside this comp */}
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
