import React, { useState } from 'react';
import { SearchBar, PopUp } from "./searchbar";

const SearchPopUp = (buttons: any): JSX.Element => {
    return (
        <PopUp trigger={buttons?.Button} setTrigger={buttons?.setButton}>
            <SearchBar text={"Search"}/>
        </PopUp>
    )
}

export default SearchPopUp;