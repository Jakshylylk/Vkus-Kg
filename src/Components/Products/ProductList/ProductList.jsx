import React, { useContext, useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { productContext } from "../../../Context/PorductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import Filter from "../../Filter/Filter";
import "./ProductList.css";

const ProductList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [select, setSelect] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (select === "all") {
      setParamsSearch({
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 5,
      });
    } else {
      setParamsSearch({
        select: select,
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 5,
      });
    }
  }, [paramsSearch, select, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);
  return (
    <>
      <div className="list-container">
        <Grid>
          <Filter select={select} setSelect={setSelect} />
        </Grid>
        <Grid>
          {productsArr ? (
            productsArr.map(item => (
              <div key={item.id}>{<ProductCard productObj={item} />}</div>
            ))
          ) : (
            <h2>Null</h2>
          )}
        </Grid>
        <Grid
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
          }}
          mx="auto"
          my="20px">
          <Pagination
            color="primary"
            count={pageTotalCount}
            page={page}
            onChange={(e, value) => setPage(value)}
            my={150}
          />
        </Grid>
      </div>
      <div className="second-img"></div>
      <div className="therd-img"></div>
      <div className="thord-img"></div>
      <div className="fivd-img"></div>
      <div className="six-img"></div>
    </>
  );
};

export default ProductList;
