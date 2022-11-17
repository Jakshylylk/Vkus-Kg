import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/PorductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);

  // ! ================ STATE FOR INPUT CHANGE START ==========
  const [select, setSelect] = useState("");
  const [firm, setFirm] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState("");
  // ? ================ STATE FOR INPUT CHANGE END ============

  // ! ================ FUNCTION ADD-PRODUCT START ============
  function handleAdd(e) {
    e.preventDefault();
    if (
      !select.trim() ||
      !firm.trim() ||
      !title.trim() ||
      !description.trim() ||
      !count ||
      !price ||
      !img1.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let newProduct = {
      select,
      firm,
      title,
      description,
      count: +count,
      price: +price,
      img1,
    };
    addProduct(newProduct);
    setSelect("");
    setFirm("");
    setTitle("");
    setDescription("");
    setCount(0);
    setPrice(0);
    setImg1("");
  }
  // ? ================ FUNCTION ADD-PRODUCT END ==============

  return (
    <>
      <div className="add-container">
        <form id="add-product" onSubmit={handleAdd}>
          <select value={select} onChange={e => setSelect(e.target.value)}>
            <option>Выберите категорию</option>
            <option>Напитки</option>
            <option>Варенье</option>
            <option>Салаты</option>
            <option>Макароны</option>
          </select>
          <TextField
            className="outlined-basic"
            label="Фирма"
            variant="outlined"
            value={firm}
            onChange={e => setFirm(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            label="Названия"
            variant="outlined"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            label="Описания"
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            type="number"
            label="Количество"
            variant="outlined"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            type="number"
            label="Цена"
            variant="outlined"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            label="1-Фотография"
            variant="outlined"
            value={img1}
            onChange={e => setImg1(e.target.value)}
          />
          <Button onClick={handleAdd}>Добавить</Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
