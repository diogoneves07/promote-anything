import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import productCardStyles from '../styles/product-card.module.css';

import { ProductWithDateLikeString } from '../lib/products-props-with-date-to-string';
import clsx from 'clsx';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({
  title,
  imageLink,
  desc,
  price,
  createdAt,
}: ProductWithDateLikeString) {
  const [expanded, setExpanded] = useState(false);

  const [liked, setLike] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: 345,
        margin: '20px 30px',
        bgcolor: '#1c1b22',
        color: '#fff',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader={createdAt}
        className={productCardStyles.color}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageLink || ''}
        alt="Paella dish"
        sx={{ padding: '10px' }}
      />
      <CardContent>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => setLike((v) => !v)}
          aria-label="add to favorites"
        >
          <FavoriteIcon sx={{ fill: liked ? 'red' : 'white' }} />
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

          <Typography paragraph>{desc}</Typography>

          <Typography>{price}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
