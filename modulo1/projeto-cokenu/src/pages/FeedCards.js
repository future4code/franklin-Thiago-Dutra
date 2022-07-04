import { CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { RecipeCardContainer, RecipeCardContent } from './styled/FeedCardsStyle'


const FeedCards = (props) => {
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={'center'}>
            {props.title}
          </Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  )
}

export default FeedCards