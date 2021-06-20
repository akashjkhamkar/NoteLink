import {Button, makeStyles, Typography, TextField} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';

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

const AssignmentForm = ({ Name, Url, Username, nameHandler, urlHandler, addHandler , usernameHandler}) => {
    const classes = useStyles();
    return (
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Create a new entry
        </Typography>
        <form>
            <TextField 
                required 
                size="small" 
                fullWidth 
                margin="normal"
                value={Name} 
                onChange={nameHandler}
                m={5}
                variant="outlined" 
                label="Name of the document"
                autoFocus />
        
            <TextField 
                required 
                size="small" 
                fullWidth             
                margin="normal"
                value={Url} 
                onChange={urlHandler}
                variant="outlined" 
                label="url"
                autoFocus/>
        
            <TextField 
                required 
                size="small" 
                fullWidth 
                margin="normal"
                value={Username} 
                onChange={usernameHandler}
                variant="outlined" 
                label="You name"
                autoFocus/>
        
        </form>
            <Button 
                style = {{
                    backgroundColor:"#BB86FC"
                }}
                variant="contained" 
                type="submit"
                onClick={addHandler}
                className={classes.submit}
                startIcon={<SaveIcon />}>
                save
            </Button>
    </div>
)};

export default AssignmentForm;