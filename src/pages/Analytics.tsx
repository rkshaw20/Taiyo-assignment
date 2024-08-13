import { useQuery } from "@tanstack/react-query";
import Chart from "../components/Chart";
import Map from "../components/Map";
import "leaflet/dist/leaflet.css";
import DeathIcon from "../assets/icons/grave.png";
import HealthIcon from "../assets/icons/better-health.png";

import { FaVirusCovid } from "react-icons/fa6";
import {
  getAllCovidData,
  getCovidDataByCountry,
  getCovidDataForChart,
} from "../services/covidData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Analytics = () => {
  // get all covid data
  const { data: covidData, isLoading: isCovidDataLoading } = useQuery({
    queryKey: ["covid_data"],
    queryFn: () => getAllCovidData(),
  });

  // get  data for chart
  const { data: chartData, isLoading: isChartDataLoading } = useQuery({
    queryKey: ["chart_data"],
    queryFn: () => getCovidDataForChart(),
  });

  // get data for map
  const { data: mapData, isLoading: isMapDataLoading } = useQuery({
    queryKey: ["map_data"],
    queryFn: () => getCovidDataByCountry(),
  });

  const isLoading =
    isCovidDataLoading || isChartDataLoading || isMapDataLoading;

  return (
    <div className="h-full w-full flex flex-col p-4 space-y-4">
      {/* analytics section */}
      <div className="flex flex-wrap gap-4 p-4">
        {/* total cases Section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex items-center justify-between flex-col sm:flex-row">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="h-10 w-10 text-3xl text-blue-500 flex items-center justify-center rounded-full">
              {isLoading ? (
                <Skeleton circle width={40} height={40} />
              ) : (
                <FaVirusCovid />
              )}
            </div>
            <div className="text-xl font-semibold">
              {isLoading ? <Skeleton width={100} /> : "Total Cases"}
            </div>
          </div>
          <div className="text-xl md:text-2xl font-bold">
            {isLoading ? <Skeleton width={120} /> : covidData?.cases}
          </div>
        </div>

        {/* total deaths section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex items-center justify-between flex-col sm:flex-row">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="text-white flex items-center justify-center">
              {isLoading ? (
                <Skeleton circle width={40} height={40} />
              ) : (
                <img src={DeathIcon} alt="death icon" className="w-10 h-10" />
              )}
            </div>
            <div className="text-xl font-semibold">
              {isLoading ? <Skeleton width={100} /> : "Total Deaths"}
            </div>
          </div>
          <div className="text-xl md:text-2xl font-bold">
            {isLoading ? <Skeleton width={120} /> : covidData?.deaths}
          </div>
        </div>

        {/* total recovered section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex items-center justify-between flex-col sm:flex-row">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="text-white flex items-center justify-center">
              {isLoading ? (
                <Skeleton circle width={40} height={40} />
              ) : (
                <img src={HealthIcon} alt="Health icon" className="w-10 h-10" />
              )}
            </div>
            <div className="text-xl font-semibold">
              {isLoading ? <Skeleton width={100} /> : "Total Recovered"}
            </div>
          </div>
          <div className="text-xl md:text-2xl font-bold">
            {isLoading ? <Skeleton width={120} /> : covidData?.recovered}
          </div>
        </div>
      </div>

      {/* chart and map Section */}
      <div className="flex flex-col gap-4">
        {/* chart Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">
            {isLoading ? <Skeleton width={80} /> : "Chart"}
          </h2>
          <div className="w-full h-80 bg-gray-100 rounded-lg">
            {isLoading ? (
              <Skeleton height={320} />
            ) : (
              <Chart chartData={chartData} />
            )}
          </div>
        </div>

        {/* map section */}
        <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">
            {isLoading ? <Skeleton width={80} /> : "Map"}
          </h2>
          <div className="w-full h-80 bg-gray-100 rounded-lg">
            {isLoading ? <Skeleton height={320} /> : <Map data={mapData} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
