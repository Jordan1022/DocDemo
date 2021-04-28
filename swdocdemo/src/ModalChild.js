import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalLink from './ModalLink';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

export default function ModalChild({which, levels, open, handleClose, handleOpen, makeLinks}) {    
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
            lineHeight: "1.6",
            [theme.breakpoints.down("xs")]: {
                height:150,
                width: 250,
                overflow:'auto',
                padding: theme.spacing(1, 2, 1.5)
              },
              [theme.breakpoints.between("sm", "md")]:{
                height:200,
                width: 250,
                overflow:'auto',
                padding: theme.spacing(1, 2, 1.5)
              },
              "@media (min-width: 1280px)": {
                height:250,
                width: 350,
                overflow: 'auto',
                padding: theme.spacing(2, 4, 3)
              },
              position: 'absolute',
              overflow:'auto',
        },
    }));
    const classes = useStyles();

    

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
                        <img 
                        alt="backArrow"
                        onClick={handleClose}
                        className="backArrow"
                        src="arrow_back.svg" 
                        />   
                        <h2 className="modalTitle">{levels[which].title}</h2>
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