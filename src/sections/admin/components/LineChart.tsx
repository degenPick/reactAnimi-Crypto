import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
// @mui
import { Card, CardHeader, Box, CardProps, CardActions, Button } from '@mui/material';
// components
import { CustomSmallSelect } from 'src/components/custom-input';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';

import Chart, { useChart } from 'src/components/chart';
import { useDateRangePicker } from 'src/components/date-range-picker';
// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  bgColor?: string;
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      year: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

export default function LineChart({ title, subheader, chart, bgColor, ...other }: Props) {
  const { colors, categories, series, options } = chart;

  const now = new Date();

  const [seriesData, setSeriesData] = useState('2019');

  const chartOptions = useChart({
    colors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    xaxis: {
      categories,
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,
      },
    },
    ...options,
  });

  return (
    <Card {...other} sx={{ backgroundColor: bgColor ?? '#202540' }}>
      <CardHeader title={title} subheader={subheader} />

      {series.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <Chart type="area" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
