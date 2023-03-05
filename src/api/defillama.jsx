const FEE_DATA = "https://api.llama.fi/overview/fees/";
const FEE_DATA_PROTOCOL = "https://api.llama.fi/summary/fees/";
const TVL = "https://api.llama.fi/protocols/";
const DEX = "https://api.llama.fi/overview/dexs/";
const TVL_HISTORY = "https://api.llama.fi/v2/historicalChainTvl";

export const fetchData = async (request) => {
  const response = await request;
  const data = await response.json();
  return data;
};

// fee overview
export const fetchFeeData = (chain, params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyFees" }) => {
  const query = (chain ? chain : "") + "?" + new URLSearchParams(params);
  return fetchData(FEE_DATA + query);
};

//protocol summary
export const fetchFeeDataProtocol = (protocol, params = { dataType: "dailyFees" }) => {
  return fetchData(FEE_DATA_PROTOCOL + protocol + "?" + new URLSearchParams(params));
};

export const fetchTVL = () => {
  return fetchData(TVL);
};

export const fetchDexVolume = (params = { excludeTotalDataChart: false, excludeTotalDataChartBreakdown: true, dataType: "dailyVolume" }) => {
  const query = DEX + "?" + new URLSearchParams(params);
  return fetchData(query);
};

export const fetchTVLHistory = () => {
  return fetchData(TVL_HISTORY);
};
