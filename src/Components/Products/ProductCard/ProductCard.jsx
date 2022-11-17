import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ productObj }) {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 400, my: "20px" }}>
        <Link to={`/details/${productObj.id}`}>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              height="200px"
              image={productObj.img1}
              alt={productObj.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productObj.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="cardText">
                {productObj.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}
export default ProductCard;
