import React from 'react';
import Button from '@material-ui/core/Button';
import ModalChild from './ModalChild';
import ModalLink from './ModalLink';
import { makeStyles } from '@material-ui/core/styles';


export default function ModalParent() {
    const [open, setOpen] = React.useState(false);        
    const [which, setWhich] = React.useState(0);  
    const useStyles = makeStyles(theme => ({
        div: {
            background:'none!important',
            border:'none',
            padding:'0!important',
            color:"blue",
            cursor:'pointer',
            marginLeft:"0px",
            marginRight: "0px",
            display:"inline"

        }
    }));
    const classes = useStyles(); 
    
    

    var levels = [
        {title:'Sweet Will',text:" #|1|# is a document #|2|#"},
        {title:'iCitizen',text:' #|2|# an individual of the Sweet Economy'},
        {title:'Economy',text:' #|0|# or sweet economy'},
    ];

    let parts = levels[which].text;

    const handleOpen = (which) => {                
        setWhich(which);        
        setOpen(true);
    };    
    const handleClose = () => {        
        setOpen(false);
    };

    // const LevelTitle = () => {
    //     let retVal= [];
    //     let num = -1;
    //     let cnt = 0;
    //     levels.forEach(level => {
    //         if(cnt == 0){
    //             retVal.push(<span>{level}</span>);
    //         }
    //         else{
    //             retVal.push(<span which={num[0]} levels={levels}></span>);
    //             retVal.push(<span>{num[1]}</span>);

    //         }
    //         cnt++;
    //     });
    //     return retVal;
    // }
    


    return (
        <div>
            <ModalChild which={which} levels={levels} open={open} handleClose={handleClose} handleOpen={handleOpen} />
            <div className={classes.div} variant="text" color="inherit" onClick={() => handleOpen(0)}>
                Sweet Will
            </div>
        </div>
    );
}