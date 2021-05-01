import React from "react";
import ModalChild from "./ModalChild";
import ModalLink from "./ModalLink";
import PageContent from "./PageContent";
import { makeStyles } from "@material-ui/core/styles";
import { levels } from "./Levels";
import RootDoc from "./assets/RootDoc";

for (let i = 0; i < levels.length; i++) {
  if (levels[i].file != undefined) {
    levels[i].text = require("./assets/" + levels[i].file).default;
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

export default function ModalParent({ text }) {
  const [open, setOpen] = React.useState(false);
  const [which, setWhich] = React.useState(0);
  const [track, setTrack] = React.useState([]);
  const useStyles = makeStyles((theme) => ({
    div: {
      background: "none!important",
      border: "none",
      padding: "0!important",
      color: "blue",
      cursor: "pointer",
      marginLeft: "0px",
      marginRight: "0px",
      display: "inline",
    },
  }));
  const classes = useStyles();

  const handleOpen = (e, whichP) => {
    setWhich(whichP);
    setOpen(true);
    setTrack([...track, whichP]);
    e.stopPropagation();
  };
  const handleClose = (e) => {
    if (e) {
      if (track.length === 1) {
        setOpen(false);
        setTrack([]);
        return;
      } else {
        const lastModal = track[track.length - 2];
        setWhich(lastModal);
        const newTrack = track.slice(0, track.length - 1);
        setTrack(newTrack);
      }
    } else {
      setOpen(false);
      setTrack([]);
    }

    //prevFunction
  };

  const makeLinks = (whichP, levels, handleOpen) => {
    if (isNaN(parseInt(whichP, 10)))
      for (let i = 0; i < levels.length; i++)
        if (levels[i].title == whichP) whichP = i;
    if (isNaN(parseInt(whichP, 10))) alert(whichP + " not found.");
    // console.log(levels[whichP]);
    let parts = levels[whichP].text.split("#|");
    let retVal = [];
    let num = -1;
    let cnt = 0;
    parts.forEach((part) => {
      if (cnt === 0) {
        retVal.push(<span id="tld" dangerouslySetInnerHTML={{ __html: part }}></span>);
      } else {
        num = part.split("|#");
        retVal.push(
          <ModalLink which={num[0]} levels={levels} handleOpen={handleOpen} />
        );
        retVal.push(<span id="tld" dangerouslySetInnerHTML={{ __html: num[1] }}></span>);
      }
      cnt++;
    });
    return retVal;
  };

  return (
    <div>
      <ModalChild
        which={which}
        levels={levels}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        makeLinks={makeLinks}
      />
      <div
        id="id_rootOfDoc"
        className={classes.div}
        variant="text"
        color="inherit"
        onClick={() => handleClose()}
      >
        <PageContent
          which="ROOTLEVEL"
          levels={levels}
          handleOpen={handleOpen}
          makeLinks={makeLinks}
        />
      </div>
    </div>
  );
}
