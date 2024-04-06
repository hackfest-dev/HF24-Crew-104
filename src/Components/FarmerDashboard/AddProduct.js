import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onProductSubmit, onCancel, onSubmitCallback }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    description: "",
    available_quantity: "",
    price_per_unit: "",
    quantity_type: "g",
    price_type: "/g",
    error: null,
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      name,
      image,
      description,
      available_quantity,
      price_per_unit,
      quantity_type,
      price_type,
    } = formData;

    if (
      !name ||
      !image ||
      !available_quantity ||
      !price_per_unit ||
      !quantity_type ||
      !price_type
    ) {
      setFormData((prevData) => ({
        ...prevData,
        error: "Please enter all details",
      }));
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      handleImageLoad(reader.result);
    };
  };

  const handleImageLoad = async (base64Image) => {
    try {
      const formData = new FormData();
      formData.append("name", formData.name);
      formData.append("image", base64Image);
      formData.append("description", formData.description);
      formData.append("available_quantity", formData.available_quantity);
      formData.append("price_per_unit", formData.price_per_unit);
      formData.append("quantity_type", formData.quantity_type);
      formData.append("price_type", formData.price_type);

      console.log("Product added successfully");

      onProductSubmit(false);

      console.log("Continue button clicked!");
    } catch (error) {
      console.error("Error adding product:", error);
      setFormData((prevData) => ({
        ...prevData,
        error: "An error occurred. Please try again.",
      }));
    }
  };

  React.useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      price_type: `/${prevData.quantity_type}`,
    }));
  }, [formData.quantity_type]);

  React.useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      quantity_type: prevData.price_type.slice(1),
    }));
  }, [formData.price_type]);

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product Image:
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Available Quantity:
          <input
            type="number"
            name="available_quantity"
            value={formData.available_quantity}
            onChange={handleInputChange}
            required
          />
          <select
            name="quantity_type"
            value={formData.quantity_type}
            onChange={handleInputChange}
            required
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
          Price per Unit:
          <input
            type="number"
            name="price_per_unit"
            value={formData.price_per_unit}
            onChange={handleInputChange}
            required
          />
          <select
            name="price_type"
            value={formData.price_type}
            onChange={handleInputChange}
            required
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
        <div className="btn-addproduct">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      {formData.error && <div className="error">{formData.error}</div>}
    </div>
  );
};

export default AddProduct;
