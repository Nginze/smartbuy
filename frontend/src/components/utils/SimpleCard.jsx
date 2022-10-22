import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import TextTruncate from "react-text-truncate";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const SimpleCard = ({ id, title, img, price, desc }) => {
  const name = useLocation();
  const location = name.pathname;
  console.log(location);

  return (
    <>
      <Link to={`/store/${2457}`}>
        <Card sx={{ maxWidth: "auto", height: 390, width: 300 }}>
          <CardActionArea>
            <div className="flex justify-center">
              <img
                className={
                  location === "/stores"
                    ? "w-[100%] h-[40%] object-cover  bg-cover main-img"
                    : "w-[50%] h-[40%] object-cover  bg-cover main-img"
                }
                src={img}
                alt="product-img"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={title}
                />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={desc}
                />
              </Typography>
              <Typography
                sx={{ fontWeight: 500 }}
                variant="small"
                color="text.secondary"
              >
                {location === "/stores" ? `Rating: ${price}` : `GH₵ ${price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box mx={2}>
            <Button variant="contained" size="medium" color="primary">
              <Link
                to={
                  location === "/stores"
                    ? `/indie-store/${title}`
                    : `/product/${id}`
                }
              >
                {location === "/stores" ? "Visit store" : "Buy Now"}
              </Link>
            </Button>
          </Box>
        </Card>
      </Link>
    </>
  );
};

export default SimpleCard;
