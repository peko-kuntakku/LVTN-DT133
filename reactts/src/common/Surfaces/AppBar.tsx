import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React,{ useEffect, useState } from 'react';
import { loadItem } from '../../control';
import { drawerWidth } from '../Navigation/Drawer';
import { styled, alpha } from '@mui/material/styles';
import { IconButton, Toolbar, Typography, Box, Badge, InputBase, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, Notifications, SearchOutlined } from '@mui/icons-material';
import { Color } from '../../styles/GlobalStyles';
import AvatarSection from '../AvatarSection';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface Props {
    open: boolean,
    handleDrawerOpen: () => void,
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 12,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        // width: 'auto',
        width: 348,
    },
    border: `1px solid ${Color.border}`,
    color: Color.extraText,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: Color.secondary,
}));

export default function CustomAppBar({ open, handleDrawerOpen }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [notifications, loadNotifications] = useState([]);
  useEffect(() => {loadItem('notifications','',loadNotifications,'')}, [notifications])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                color: Color.extraText
            }}
        >
            <MenuIcon />
        </IconButton>
        <Search>
            <SearchIconWrapper>
                <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Tìm kiếm..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: Color.extraText, marginRight: 2 }}
              onClick={handleClick}
              aria-describedby={id}
          >
            <Badge badgeContent={notifications.length} color="error">
              <Notifications/>
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={open2}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography variant='subtitle1' fontWeight="600">Thông báo</Typography>
            <Box sx={{ width: '250px', backgroundColor: 'white', flexDirection: "row-reverse"}} >
            {
              notifications.map(({attributes : {Title, Content}}: any)=>
              <>
                <hr/>
                <Box sx={{ width: '100%', mx:1, backgroundColor: 'white'}}>
                  <Typography component="div" variant='subtitle1' fontWeight="600">{Title}</Typography>
                  <Typography component="span" variant='subtitle2'>{Content}</Typography>
                </Box>
                
              </>
              )
            }
          </Box> 
          </Popover>
          <AvatarSection sx={{ borderLeft: `1px solid ${Color.border}` }} />
          {/* <IconButton
              size="large"
              edge="end"
              sx={{ color: Color.extraText }}
          >
              <AccountCircle />
          </IconButton> */}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
