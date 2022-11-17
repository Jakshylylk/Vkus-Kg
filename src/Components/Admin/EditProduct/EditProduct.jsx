import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productContext } from "../../../Context/PorductContextProvider";
import "./EditProduct.css";

const EditProduct = () => {
  const { editProduct, productDetails, readOneProduct } =
    useContext(productContext);
  const [editValue, setEditValue] = useState(productDetails);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function changeProduct(e) {
    let editObj = {
      ...editValue,
      [e.target.name]: e.target.value,
    };
    setEditValue(editObj);
  }

  function saveEditNewProduct(e) {
    e.preventDefault();
    if (
      !editValue.select.trim() ||
      !editValue.firm.trim() ||
      !editValue.title.trim() ||
      !editValue.description.trim() ||
      !editValue.count ||
      !editValue.price ||
      !editValue.img1.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    editProduct(id, editValue);
    navigate(`/details/${id}`);
  }

  return (
    <>
      <div className="edit-container">
        <form id="add-product" onSubmit={e => saveEditNewProduct(e)}>
          <select
            name="select"
            value={editValue.select}
            onChange={e => changeProduct(e)}>
            <option>Выберите категорию</option>
            <option>Напитки</option>
            <option>Варенье</option>
            <option>Салаты</option>
            <option>Макароны</option>
          </select>
          <TextField
            className="outlined-basic"
            label="Фирма"
            name="firm"
            variant="outlined"
            value={editValue.firm}
            onChange={e => changeProduct(e)}
          />
          <TextField
            className="outlined-basic"
            label="Названия"
            name="title"
            variant="outlined"
            value={editValue.title}
            onChange={e => changeProduct(e)}
          />
          <TextField
            className="outlined-basic"
            label="Описания"
            name="description"
            variant="outlined"
            value={editValue.description}
            onChange={e => changeProduct(e)}
          />
          <TextField
            className="outlined-basic"
            type="number"
            label="Количество"
            name="count"
            variant="outlined"
            value={editValue.count}
            onChange={e => changeProduct(e)}
          />
          <TextField
            className="outlined-basic"
            type="number"
            label="Цена"
            name="price"
            variant="outlined"
            value={editValue.price}
            onChange={e => changeProduct(e)}
          />
          <TextField
            className="outlined-basic"
            label="Фотография"
            name="img1"
            variant="outlined"
            value={editValue.img1}
            onChange={e => changeProduct(e)}
          />
          <Button type="submit">Сохранить</Button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
