import React from 'react';

export default function PageContent({which, levels, handleOpen, makeLinks}) {   
    return (makeLinks(which,levels,handleOpen))
}