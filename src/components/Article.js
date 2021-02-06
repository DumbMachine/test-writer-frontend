import React from 'react'
import SearchAppBar from './SearchAppBar'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./Article.css"

function Article() {
    return (
        <div className="article">
            <div className="article_searchBar">
                <SearchAppBar/>
            </div>
            <div className="articleComponents">
                <div className="insideComp">
                        
                </div>
                <div className="buttonGrp">
                    <div className='Button1'>
                        <Button variant="contained" color="primary">
                            Button1
                        </Button>
                    </div>
                    <div className='Button2'>
                    <SimpleMenu />
                    </div>  
                </div>
            </div>

        </div>
    )
}

export default Article






export function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        BUTTON2
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}