import React, { useEffect } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../Actions/Actions";
import { Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <h3 style={{ marginTop: "20px" }}>Products</h3>
      <div className="maindiv ">
        {products.map((product, id) => (
          <div className="postdiv shadow" key={id}>
            <Link
              to={`posts/${product.id}`}
              className="btn btn-danger btn-edit"
            >
              <span className="material-icons">edit</span>
            </Link>
            <button className="btn btn-danger btn-delete">
              <span className="material-icons">delete_outline</span>
            </button>
            <div>
              <img
                height="150px"
                width="150px"
                src="https://media.istockphoto.com/photos/red-onions-picture-id499146498?k=20&m=499146498&s=612x612&w=0&h=fe8fftS2SpmSlx_KAT_wOPIhlwO9SFelIwq0nmG8NmA="
              />
            </div>
            <span>{product.id}</span>
           <br></br>
              <span> {product.name}</span>
           <br/>
            <span>{product.price}</span>
            <p>{product.category}</p>
            <Button variant="primary">Add To Cart</Button>
            <br />
            <br />
            <p style={{ color: "red" }}>{product.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
