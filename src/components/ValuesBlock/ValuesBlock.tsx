import { Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

type ValuesItemProps = {
  heading: string;
  description: string;
};

export type ValuesBlockProps = {
  group_heading: string;
  items: ValuesItemProps[];
};

export const ValuesBlock = ({ group_heading, items }: ValuesBlockProps) => (
  <div className="flex flex-col items-center p-16 text-indigo-950">
    <Typography variant="h3">{group_heading}</Typography>
    <div className="mt-12 flex justify-center gap-16">
      {items.map((item, i) => (
        <div className="bg-[#9d621e] text-white p-16 pt-4 flex flex-col items-center w-fit">
          <div className="mb-12">
            <Brightness1Icon />
          </div>

          <Typography variant="h4">{item.heading}</Typography>
          <Typography marginTop={2} align="center" variant="body1">
            {item.description}
          </Typography>
        </div>
      ))}
    </div>
  </div>
);
