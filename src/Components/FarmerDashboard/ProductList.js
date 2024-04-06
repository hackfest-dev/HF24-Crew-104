import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddProduct from "./AddProduct";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editModes, setEditModes] = useState([]);
  const [error, setError] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  useEffect(() => {
    // 18-52 comment kar aur uske niche wala uncomment kar
    const fetchedProducts = [
      {
        _id: 1,
        name: "Fresh Mango",
        description: "Ratnagiri Alphonso",
        available_quantity: 100,
        price_per_unit: 200,
        image:
          "https://www.shutterstock.com/image-photo/ripe-mango-isolated-on-white-600nw-1297537549.jpg",
        quantityType: "dozen",
        priceType: "/dozen",
      },
      {
        _id: 2,
        name: "Fresh Mango",
        description: "Totapuri",
        available_quantity: 50,
        price_per_unit: 150,
        image:
          "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantityType: "dozen",
        priceType: "/dozen",
      },
      {
        _id: 3,
        name: "Fresh Mango Raw",
        description: "",
        available_quantity: 50,
        price_per_unit: 100,
        image:
          "https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantityType: "dozen",
        priceType: "/dozen",
      },
    ];

    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("api/v1/farmer/retrieve");
    //     setProducts(response.data);
    //   } catch (error) {
    //     setError(error);
    //     console.error("Error fetching product data:", error);
    //   }
    // };

    // fetchProducts();

    setProducts(fetchedProducts);
  }, []);

  const handleEditClick = (index) => {
    setEditModes((prevEditModes) => {
      const newEditModes = [...prevEditModes];
      newEditModes[index] = !newEditModes[index];
      return newEditModes;
    });
  };

  const handleDeleteClick = async (index) => {
    try {
      const productId = products[index]._id;
      await axios.delete(`your_api_endpoint/${productId}`);

      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(
        "An error occurred while deleting the product. Please try again."
      );
    }
  };

  const handleProductSubmit = async (newProduct) => {
    setIsAddingProduct(false);
    try {
      // Send new product data to the API and update state with response

      setEditModes([...editModes, false]);
    } catch (error) {
      console.error("Error adding product:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;

    if (field === "quantityType") {
      newProducts[index]["priceType"] = `/${value}`;
    }

    if (field === "priceType") {
      newProducts[index]["quantityType"] = value.slice(1);
    }

    setProducts(newProducts);
  };

  const handleSaveClick = async (index) => {
    try {
      // send data to backend
      setEditModes((prevEditModes) => {
        const newEditModes = [...prevEditModes];
        newEditModes[index] = false;
        return newEditModes;
      });
    } catch (error) {
      console.error("Error updating product:", error);
      setError("An error occurred while saving. Please try again.");
    }
  };

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={product._id} className="product-item">
            <div className="icons">
              <div className="icon-container">
                <button
                  onClick={() => handleEditClick(index)}
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                    color: "black",
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDeleteClick(index)}
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    display: "flex",
                    color: "black",
                    flexDirection: "row-reverse",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />{" "}
                </button>
              </div>
            </div>

            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="150"
            />
            <div className="product-info">
              <label>
                Product Name:
                <input
                  type="text"
                  value={product.name}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </label>
              <label>
                Product Description:
                <input
                  type="text"
                  value={product.description}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  value={product.available_quantity}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "available_quantity",
                      parseInt(e.target.value)
                    )
                  }
                />
                <select
                  name="quantityType"
                  value={product.quantityType}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(index, "quantityType", e.target.value)
                  }
                >
                  <option value="g">Gram</option>
                  <option value="kg">Kg</option>
                  <option value="dozen">Dozen</option>
                  <option value="piece">Piece</option>
                  <option value="bunch">Bunch</option>
                  <option value="crate">Crate</option>
                  <option value="quintal">Quintal</option>
                  <option value="bundle">Bundle</option>
                </select>
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={product.price_per_unit}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "price_per_unit",
                      parseInt(e.target.value)
                    )
                  }
                />
                <select
                  name="priceType"
                  value={product.priceType}
                  disabled={!editModes[index]}
                  onChange={(e) =>
                    handleInputChange(index, "priceType", e.target.value)
                  }
                >
                  <option value="/g">/Gram</option>
                  <option value="/kg">/Kg</option>
                  <option value="/dozen">/Dozen</option>
                  <option value="/piece">/Piece</option>
                  <option value="/bunch">/Bunch</option>
                  <option value="/crate">/Crate</option>
                  <option value="/quintal">/Quintal</option>
                  <option value="/bundle">/Bundle</option>
                </select>
              </label>
            </div>
            {editModes[index] && (
              <button onClick={() => handleSaveClick(index)}>Save</button>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <button onClick={() => setIsAddingProduct(true)}>Add Product</button>
      </div>
      {isAddingProduct && (
        <AddProduct
          onProductSubmit={handleProductSubmit}
          onCancel={() => setIsAddingProduct(false)}
        />
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ProductList;
