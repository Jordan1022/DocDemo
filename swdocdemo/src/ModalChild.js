import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalLink from './ModalLink';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

export default function ModalParent({which, levels, open, handleClose, handleOpen}) {    
    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();

    const makeLinks = (which, levels, handleOpen) => {
        let parts = levels[which].text.split("#|");
        let retVal = [];
        let num = -1;
        let cnt = 0;        
        parts.forEach(part => {
            if (cnt==0)
                retVal.push(<span>{part}</span>);
            else {           
                num = part.split("|#");
                retVal.push(<ModalLink which={num[0]} levels={levels} handleOpen={handleOpen} />);
                retVal.push(<span>{num[1]}</span>);
            }
            cnt++;
        });                
        return retVal;
    }

    return(
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => handleClose() }
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{levels[which].title}</h2>
                        <p>
                            {makeLinks(which,levels,handleOpen)}
                            <br />
                            <Button variant="text" color="secondary" onClick={() => handleClose() }>
                                CLOSE
                            </Button>
                        </p>
                    </div>
                </Fade>
            </Modal>)     
}