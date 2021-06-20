import {makeStyles, Typography, TextField} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const QueryForm = ({ Query, queryHandler}) => {
    const classes = useStyles();
    return (
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            or
        </Typography>
        
        <Typography component="h1" variant="h5">
            search for the document
        </Typography>

        <form>            
            <TextField 
                required 
                size="small" 
                fullWidth
                value={Query} 
                onChange={queryHandler}
                margin="normal"
                variant="standard" 
                label="search"/>
        </form>
    </div>
)}

export default QueryForm;