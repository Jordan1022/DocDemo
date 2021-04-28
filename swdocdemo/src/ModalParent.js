import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ModalChild from './ModalChild';
import ModalLink from './ModalLink';
import PageContent from './PageContent';
import { makeStyles } from '@material-ui/core/styles';
import {levels} from './Levels';

for (let i=0;i<levels.length;i++){
    if (levels[i].file != undefined){
        levels[i].text = require('./assets/'+levels[i].file).default;
        // console.log(levels[i].text);
    }
}

// for(let i = 0; i < levels.length; i++){
//     if(levels[i].title != 'ROOTLEVEL'){
//         modalBack.push(levels[i].title)
//         // var levelTitle1 = levels[i].title.split(' ').join('');
//         // var levelPath = "/" + levelTitle1
//         console.log();
//     }
// }

export default function ModalParent({text}) {
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

    const handleOpen = (e,whichP) => {                
        setWhich(whichP);    
        // console.log(whichP,which);
        setOpen(true);
        e.stopPropagation();
    };    
    const handleClose = () => {        
        setOpen(false);
        //prevFunction
    };

    const makeLinks = (whichP, levels, handleOpen) => {       
        //console.log(levels);
        if (isNaN(parseInt(whichP, 10)))
            for(let i=0;i<levels.length;i++)
                if (levels[i].title==whichP)
                 whichP = i;
        if (isNaN(parseInt(whichP, 10)))
            alert(whichP + ' not found.');
        // console.log(levels[whichP]);
        let parts = levels[whichP].text.split("#|");
        let retVal = [];
        let num = -1;
        let cnt = 0;        
        parts.forEach(part => {
            if (cnt==0)
               { retVal.push(<span dangerouslySetInnerHTML={{__html:part}}></span>);
          //      console.log(part);
                }
            else {           
                num = part.split("|#");
                retVal.push(<ModalLink which={num[0]} levels={levels} handleOpen={handleOpen} />);
                retVal.push(<span dangerouslySetInnerHTML={{__html:num[1]}}></span>);
            }
            cnt++;
        });   
        return retVal;
    }


    return (
        <div>
            <ModalChild which={which} levels={levels} open={open} handleClose={handleClose} handleOpen={handleOpen} makeLinks={makeLinks}  />
            <div id="id_rootOfDoc" className={classes.div} variant="text" color="inherit" onClick={() => handleClose() }>
                <PageContent which='ROOTLEVEL' levels={levels} handleOpen={handleOpen} makeLinks={makeLinks} />
            </div>
        </div>
    );
}