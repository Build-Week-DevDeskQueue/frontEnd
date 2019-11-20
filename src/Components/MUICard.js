import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function MUICard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Title: {props.title}
                </Typography>
                <Typography variant="h5" {props.type} component="h2">
                    {bull}
                    Type: {props.type}
                </Typography>
                <Typography className={classes.pos} {props.owner} color="textSecondary">
                    Owner: {props.owner}
                </Typography>
                <Typography variant="body2" {props.description} component="p">
                    Description: {props.description}
                    <br />
                    {'"description"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Expand</Button>
            </CardActions>
        </Card>
    );
}