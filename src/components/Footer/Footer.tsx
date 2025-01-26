import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box bgcolor="#6677cd" py={2} color="fff">
    <div className="flex flex-col items-center justify-end h-full">
      <Typography variant="body2">
        © {new Date().getFullYear()} Business Landing
      </Typography>
    </div>
  </Box>
);
