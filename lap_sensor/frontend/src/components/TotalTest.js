import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const TotalTest = () => {
    return (
        <div>
        <Card style={{heigh: 32}}>
            <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                       image='https://www.w3schools.com/w3css/img_lights.jpg'
                       tiltle="Tytul"/>
                       <CardContent>
                           <Typography gutterBottom variant="headline" component="h2">
                           Tytul
                           </Typography>
                           <Typography component="p">
                           Tyt
                           </Typography>
                       </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Test przycisk
                </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TotalTest;