import React from 'react'

import {
    createStyles,
    makeStyles,
    alpha,
  } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) =>
    createStyles({
      searchBar: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.25),
        },
        marginLeft: 0,
        float: 'right',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },

      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      inputRoot: {
        color: 'inherit',
      },

      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    })
);

function handleSearch(event) {
  console.log(event.target.value);
};

export default function Search(){
    const classes = useStyles();
    return (
    <div style={{ flexGrow: "1" }}>
    <div className={classes.searchBar} >
        <div className={classes.searchIcon}>
            <SearchIcon fontSize="small" />
        </div>
        <InputBase
        placeholder="Search..."
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        id='searchbox'
        inputProps={{ 'aria-label': 'search ' }}
        onChange={handleSearch}
        />
    </div>
    </div>
    )
}
