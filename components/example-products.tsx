import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import exampleProductsStyles from "./example-products.module.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function ExampleProducts() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={exampleProductsStyles.products}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "20px 30px",
          bgcolor: "#1c1b22",
          color: "#fff",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          color="red"
          title="Shrimp and Chorizo Paella"
          subheader="loren"
          className="loren"
        />
        <CardMedia
          component="img"
          height="194"
          image="images/profile.jpg"
          alt="Paella dish"
          sx={{ padding: "10px" }}
        />
        <CardContent>
          <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Desc:</Typography>

            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              magnam error modi molestiae rerum laboriosam facilis repellendus,
              suscipit eum at porro illum praesentium, incidunt voluptates odio
              similique ipsa soluta ad?
            </Typography>

            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ducimus accusamus assumenda quis sed? Tenetur at
              veritatis placeat dolor iste tempora magnam doloribus, deserunt
              corporis quis! Cupiditate corporis ullam in?
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
