import React from 'react';
import Button from '@material-ui/core/Button';
import ModalChild from './ModalChild';
import ModalLink from './ModalLink';
import { makeStyles } from '@material-ui/core/styles';


export default function ModalParent() {
    const [open, setOpen] = React.useState(false);        
    const [which, setWhich] = React.useState(0);  
    const useStyles = makeStyles(theme => ({
        button: {
            background:'none!important',
            border:'none',
            padding:'0!important',
            color:'#069',
            cursor:'pointer',
            display: 'inline-block',
            padding:0
        }
    }));
    const classes = useStyles(); 
    
    

    var levels = [
        {title:'Sweet Will',text:" #|1|# is a document #|2|#"},
        {title:'iCitizen',text:' #|2|# an individual of the Sweet Economy'},
        {title:'Economy',text:' #|0|# or sweet economy'},
    ];

    const handleOpen = (which) => {                
        setWhich(which);        
        setOpen(true);
    };    
    const handleClose = () => {        
        setOpen(false);
    };

    const LevelTitle = () => {
        let retVal= [];
        let num = -1;
        let cnt = 0;
        levels.forEach(level => {
            if(cnt == 0){
                retVal.push(<span>{level}</span>);
            }
            else{
                retVal.push(<span which={num[0]} levels={levels}></span>);
                retVal.push(<span>{num[1]}</span>);

            }
            cnt++;
        });
        return retVal;
    }
    
    


    return (
        <div>
            <ModalChild which={which} levels={levels} open={open} handleClose={handleClose} handleOpen={handleOpen} />
            <Button className={classes.button} variant="text" color="inherit" onClick={() => handleOpen(0)}>
                Sweet Will
            </Button>
        </div>
    );
}