import React from "react";
import MapCityRosario from "../../components/mapCityRosario";
import MapProvince from "../../components/mapProvince";

const Home: React.FC = () => {
  return (
    <section>
      <MapCityRosario />
      <MapProvince />
    </section>
  );
};

export default Home;
