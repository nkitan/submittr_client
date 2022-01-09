import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton  from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Search from './Search'

export default class SearchAppBar extends React.Component {
    render () {
    return (
    <Box sx={{mx: 1, mt: 1, px: 1}} flexGrow="1">
    <AppBar position="static" color="secondary" style={{opacity: 0.9}}>
          <ToolBar>
              <IconButton onClick={() => {}} 
                size="small"
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
                style={{ marginLeft: '.5rem' }} 
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                Submittr - {this.props.id}
              </Typography>
              <Search />
          </ToolBar>
      </AppBar>
      </Box>
    )}
}