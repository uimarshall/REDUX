import React from "react";

function EmptyCart() {
	return (
		<div>
			<div className="row">
				<div className="col-10 mx-auto text-center text-title">
					<h1>
						your cart is empty -{" "}
						<span className="add-to-cart">add to cart(link)</span>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default EmptyCart;
