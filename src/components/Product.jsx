import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
//THE REDUX IMPORTS
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
	const [products, getProducts] = useState([]);
	const dispatch = useDispatch();

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((result) => getProducts(result));
	}, []);

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	const addToCart = (product) => {
		//dispatch an action using redux
		dispatch(add(product));
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	const cards = products.map((product) => (
		<div className="col-md-3" style={{ marginBottom: "1rem" }} key={product.id}>
			<Card className="h-100">
				<div className="text-center">
					<Card.Img
						className="img-fluid"
						variant="top"
						src={product.image}
						style={{ width: "100px", height: "130px" }}
					/>
				</div>
				<Card.Body>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
				</Card.Body>
				<Card.Footer style={{ background: "white" }}>
					<div className="d-flex justify-content-center">
						<Button variant="primary" onClick={() => addToCart(product)}>
							Add to cart
						</Button>
					</div>
				</Card.Footer>
			</Card>
		</div>
	));

	////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<div className="container">
			<h1 className="text-center">Product Dashboard</h1>
			<div className="row">{cards}</div>
		</div>
	);
};

export default Product;
