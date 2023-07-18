import { Button, Card } from "react-bootstrap";

//////////////////////// from redux //////////////////////////
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
	//////////////////////STATES//////////////////////////////////////////
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	////////////////////FUNCTIONS//////////////////////////////////////////////////
	const removeFromCart = (id) => {
		//dispatch a remove action from the store
		dispatch(remove(id));
	};

	///////////////////////////////////////////////////////////////////////

	const cards = products.map((product) => (
		<div
			className="col-md-12"
			style={{ marginBottom: "1rem" }}
			key={product.id}
		>
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
						<Button variant="danger" onClick={() => removeFromCart(product.id)}>
							Add to cart
						</Button>
					</div>
				</Card.Footer>
			</Card>
		</div>
	));

	////////////////////////////////////////////////////////////////////////
	return (
		<>
			<div className="container">
				<h1 className="text-center">Product</h1>
				<div className="row text-center justify-content-center">
					<div className="col-md-4">{cards}</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
