import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { MdOutlineWatchLater } from "react-icons/md";

export function StatisticsChart({ data }) {
  const { color, chart, title, description, footer } = data;
  return (
    <Card>
      <CardHeader variant="gradient" color={color}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5 flex items-center gap-2">
          <MdOutlineWatchLater />
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}
