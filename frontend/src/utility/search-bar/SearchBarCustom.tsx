import React, { ReactDOM  , useState} from 'react';
import useStyles from './SearchBarCustom-style';
import SearchBar from "material-ui-search-bar";


const SearchBarCustom : React.FC = () => {
    const classes = useStyles();
    return(
        <>
         <SearchBar className={classes.backgroundColor} />
        
        </>
    );
}

export default SearchBarCustom