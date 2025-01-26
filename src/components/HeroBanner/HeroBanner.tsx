import { Box, Button, Typography } from "@mui/material";

export type HeroBannerProps = {
  bgColor: string;
  heading: string;
  description: string;
  cta: {
    title: string;
    url: string;
  };
};

export const HeroBanner = ({
  bgColor,
  heading,
  description,
  cta,
}: HeroBannerProps) => (
  <Box height={350} bgcolor={bgColor} p={4} color="#fff">
    <div className="flex flex-col justify-center h-full">
      <Typography variant="h2">{heading}</Typography>
      <Typography marginTop={2} variant="body1">
        {description}
      </Typography>
      <div className="mt-12 w-fit">
        <Button
          color="warning"
          style={{ background: "#e37c05" }}
          size="large"
          variant="contained"
        >
          {cta.title}
        </Button>
      </div>
    </div>
  </Box>
);
