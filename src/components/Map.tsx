import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const Map = ({ data }: any) => {
  const covidIcon = new Icon({
    iconUrl:
      "https://imgs.search.brave.com/XEoxJqrgNm3VRaqDMRHDV3J79orpXPQ8lDUwcz6bu-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy9yb3lhbC1ibHVl/L21hcC1tYXJrZXIt/Mi14bC5wbmc",
    iconSize: [20, 20],
  });
  return (
    <MapContainer
      center={[51.505, -0.09]}
      style={{ height: "100%", width: "100%" }}
      zoom={1}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((country: any) => {
        return (
          <Marker
            key={country.country}
            icon={covidIcon}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div className="flex flex-col gap-2">
                <div className="text-xl">{country.country}</div>

                <div className="flex flex-col gap-1">
                  <span>Cases: {country.cases}</span>
                  <span>Deaths: {country.deaths}</span>
                  <span>Recovered: {country.recovered}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
export default Map;
