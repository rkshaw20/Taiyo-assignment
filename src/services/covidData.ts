import axios from "axios";

export const getAllCovidData = async () => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    return res.data;
  } catch (error) {
    console.error("error while fetching covidData", error);
  }
};
export const getCovidDataByCountry = async () => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries");
    return res.data;
  } catch (error) {
    console.error("error while fetching mapData", error);
  }
};
export const getCovidDataForChart = async () => {
  try {
    const res = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return res.data;
  } catch (error) {
    console.error("error while fetching chartData", error);
  }
};
