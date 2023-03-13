import DexTable from "../../components/Table/DexTable";
import { useQuery } from "react-query";
import { fetchData, unixToMs } from "../../utils/helpers";
import defillama from "defillama-api";
import { Suspense } from "react";
import ChartContainer from "../../components/Chart/ChartContainer";
import LineChart from "../../components/Chart/LineChart";
import DataDistribution from "../../components/DataDistribution/DataDistribution";
import VolumesStats from "./VolumesStats";

const Volumes = () => {
  const { data } = useQuery(["dex", "chartData"], () =>
    fetchData(defillama.volumes.dexsAll({ exludeTotalDataChart: false, exludeTotalDataChartBreakdown: false }))
  );

  const transformedData = data.totalDataChart.map(([date, volume]) => {
    return { x: unixToMs(date), y: volume };
  });

  return (
    <>
      <VolumesStats data={data} />
      <ChartContainer>
        <LineChart
          data={transformedData}
          title={"Dex Volumes History"}
        />
        <DataDistribution
          data={data}
          title={"Volume Distribution"}
        />
      </ChartContainer>

      <DexTable data={data.protocols} />
    </>
  );
};

export default Volumes;
