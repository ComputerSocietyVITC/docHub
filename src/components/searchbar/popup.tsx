import React, { useState } from 'react';
import { SearchBar, PopUp } from "./searchbar";

const SearchPopUp = (buttons: any): JSX.Element => {
    return (
        <PopUp trigger={buttons?.Button} setTrigger={buttons?.setButton}>
            <SearchBar text={String.fromCodePoint(0x1F50E)+"Search"}/>
        </PopUp>
    )
}

export default SearchPopUp;