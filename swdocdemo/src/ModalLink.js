export default function ModalLink({which, levels, handleOpen}) {
    return (<a style={{cursor:"pointer", textDecoration:"underline"}} onClick={()=>handleOpen(which)}>{levels[which].title}</a>)
}