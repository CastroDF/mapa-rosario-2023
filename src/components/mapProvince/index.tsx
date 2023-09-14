import React, { useEffect } from "react";
import "./styles.css";

const MapProvince: React.FC = () => {
  useEffect(() => {
    const iframeEle = document.getElementById("map-iframe-province");
    const loadingEle = document.getElementById("loading-province");

    (iframeEle as HTMLElement).addEventListener("load", function () {
      // Hide the loading indicator
      (loadingEle as HTMLElement).style.display = "none";

      // Bring the iframe back
      (iframeEle as HTMLElement).style.opacity = "1";
    });
  }, []);

  return (
    <>
      <div id="loading-province">
        <span className="loader"></span>
      </div>
      <iframe
        id="map-iframe-province"
        src="https://flo.uri.sh/visualisation/15025882/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe map"
        frameBorder="0"
        scrolling="no"
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </>
  );
};

export default MapProvince;
