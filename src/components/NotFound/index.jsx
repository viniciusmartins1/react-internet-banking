import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImgNotFound from '../../assets/img/404.PNG';
import { Link } from 'react-router-dom'

const ContentNotFound = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Card sx={{ maxWidth: 645 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={ImgNotFound}
            alt="não encontrado"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ops!!.... Página não encontrada
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to="/" style={{textDecoration: "none", color: "blue"}}>Voltar para Home</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ContentNotFound;


