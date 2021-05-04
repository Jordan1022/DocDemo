import React from 'react';

export default function ModalLink({which, levels, handleOpen}) {
    if (isNaN(parseInt(which, 10)))
            for(let i=0;i<levels.length;i++)
                if (levels[i].title==which)
                    which = i;
        if (isNaN(parseInt(which, 10)))
            alert(which + ' not found.');
    return (<a style={{cursor:"pointer", color:"blue", display:"inline",}} onClick={(e)=>handleOpen(e,which)}>{levels[which].title}</a>)
}