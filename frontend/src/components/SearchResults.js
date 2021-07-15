import {Button, Grid, makeStyles, Typography} from '@material-ui/core/';
import {Card, CardActions, CardContent} from "@material-ui/core"

const gridStyles = makeStyles({
    root: {
        minWidth: 100,
        background: "#FFFFFF"
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
});

const SearchResults = ({results}) =>{ 
    const classes = gridStyles();

    let visibility = "resultgrid";
    if (results.length === 0) {
        visibility = "hidden"
    }

    return (
        <Grid 
            className={visibility} 
            container 
            spacing={10}
            style={{padding: '24px'}}>
            {results.map(result => (
                <Grid 
                    item
                    xs={12} sm={6} md={4} lg={4} xl={3}
                    className="result" 
                    key={result.id} 
                    height={140}
                    width={120}>
                    
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Name
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {result.fileName}
                            </Typography>

                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                by - 
                            </Typography>

                            <Typography variant="body2" component="p">
                                {result.user}
                            </Typography>
                            
                        </CardContent>
                        
                        <CardActions>
                            <Button 
                                style={{
                                    backgroundColor: "#6c00b4",
                                    color: "white"
                                }}
                                label="url" 
                                variant="contained"
                                target="_blank"
                                href={result.url}>
                                    link
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default SearchResults;