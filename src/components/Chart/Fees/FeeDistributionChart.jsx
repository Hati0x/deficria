import HighchartsReact from "highcharts-react-official";
import Highcharts from "../highChartsTheme";
import { useEffect, useState, useRef } from "react";

const createThreshold = (data, threshold) => {
  const filteredData = data.filter((item) => item.y > threshold);
  const sum = filteredData.reduce((acc, prevItem) => {
    return (acc += prevItem.y);
  }, 0);
  filteredData.push({ name: "other", y: 100 - sum });
  return filteredData;
};

const FeeDistributionChart = ({ data }) => {
  const FEES_PIECHART_THRESHOLD = 1;
  const filteredData = createThreshold(data, FEES_PIECHART_THRESHOLD);

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Fee distribution",
    },

    series: [
      {
        name: "Share",
        data: filteredData,
      },
    ],
  };

  useEffect(() => {
    setChartOptions(options);
  }, [data]);

  const [chartOptions, setChartOptions] = useState(options);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default FeeDistributionChart;
