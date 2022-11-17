import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import "./OurPartners.css";

const OurPartners = () => {
  return (
    <>
      <div className="partners-container">
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="https://letsgo.kg/data/product_line/tea-limon.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400 }}
              height="300"
              image="https://www.shoro.kg/wp-content/uploads/2019/12/newlogo.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="https://st-1.akipress.org/st_who/images/1535600667.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="https://st-1.akipress.org/st_who/images/1533192492.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="http://st-1.akipress.org/st_tazabek/3/399873.1449719882_0.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="https://seeklogo.com/images/N/nitro-logo-651CFD6DC9-seeklogo.com.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              width="400px"
              height="300"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6u_QK7EP2HdvYiwiY3eShYcMR9aS6GrtJNw&usqp=CAU"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="http://st-1.akipress.org/st_tazabek/3/399873.1449719882_0.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, mt: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: 400, mt: 5 }}
              height="300"
              image="http://st-1.akipress.org/st_tazabek/3/399873.1449719882_0.jpg"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default OurPartners;
