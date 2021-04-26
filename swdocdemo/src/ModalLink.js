import React from 'react';

export default function ModalLink({which, levels, handleOpen}) {
    return (<a style={{cursor:"pointer", textDecoration:"underline", color:"blue"}} onClick={()=>handleOpen(which)}>{levels[which].title}</a>)
}