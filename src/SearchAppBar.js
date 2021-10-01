import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton  from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Search from './Search'
  
export default function SearchAppBar() {
    return (
    <Box flex>
    <AppBar position="static" color="secondary">
        <ToolBar flex>
            <IconButton onClick={() => {}} 
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Submittr
            </Typography>
            <Search />
        </ToolBar>
    </AppBar>
    </Box>
  )
}