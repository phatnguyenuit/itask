import { Menu as MenuIcon } from '@mui/icons-material';
import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from '@mui/material';

const AppBar: React.FC = () => (
  <MuiAppBar position="fixed">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        iTask
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
