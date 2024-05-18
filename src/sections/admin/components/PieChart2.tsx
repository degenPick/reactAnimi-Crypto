import { ApexOptions } from 'apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader, CardProps } from '@mui/material';
// utils
import { fNumber } from 'src/utils/formatNumber';
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72;

const AntCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#202540',
  paddingTop: 50,
  paddingBottom: 50,
}));

const StyledChart = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT,
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important' as 'relative',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
  '& .apexcharts-legend-text': {
    color: '#777777 !important',
  },
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ApexOptions;
  };
}

export default function PieChart2({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    stroke: { colors: [theme.palette.background.paper] },
    legend: {
      horizontalAlign: 'center',
      show: true,
      position: 'bottom',
      offsetY: 0,
      itemMargin: {
        vertical: 0,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value: number) => `${fNumber(value)}`,
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            value: {
              formatter: (value: number | string) => `${fNumber(value)}`,
            },
            total: {
              formatter: (w: { globals: { seriesTotals: number[] } }) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `${fNumber(sum)}`;
              },
              show: false,
            },
          },
        },
      },
    },
    ...options,
  });

  return (
    <AntCard {...other}>
      {/* <CardHeader title={title} subheader={subheader} /> */}

      {/* <StyledChart dir="ltr"> */}
      <Chart type="donut" series={chartSeries} options={chartOptions} height={320} />
      {/* </StyledChart> */}
    </AntCard>
  );
}
