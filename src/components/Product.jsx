import { useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
//THE REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
	////////////////////////////////////////////////////////////////
	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.products);

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	useEffect(() => {
		//dispatch an action for fetch products API
		dispatch(getProducts());
	}, [dispatch]);

	if (status === StatusCode.LOADING) {
		return <p>Loading...</p>;
	}

	if (status === StatusCode.ERROR) {
		return (
			<Alert key="danger" variant="danger">
				Something went wrong!!!
			</Alert>
		);
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	const addToCart = (product) => {
		//dispatch an action using redux
		dispatch(add(product));
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	const cards = products.map((product) => (
		<div className="col-md-3" style={{ marginBottom: "1rem" }} key={product.id}>
			<Card className="h-100" style={{ paddingTop: ".5rem" }}>
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
