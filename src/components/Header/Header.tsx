import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => (
  <AppBar position="static">
    <Toolbar variant="regular" className="bg-white text-stone-900">
      <Typography variant="h1" fontSize={30}>
        Business Landing
      </Typography>
    </Toolbar>
  </AppBar>
);
