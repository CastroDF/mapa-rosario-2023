import React, { useEffect } from "react";
import "./styles.css";

const MapConcejales: React.FC = () => {
  useEffect(() => {
    const iframeEle = document.getElementById("map-iframe");
    const loadingEle = document.getElementById("loading");

    (iframeEle as HTMLElement).addEventListener("load", function () {
      // Hide the loading indicator
      (loadingEle as HTMLElement).style.display = "none";

      // Bring the iframe back
      (iframeEle as HTMLElement).style.opacity = "1";
    });
  }, []);

  return (
    <>
      <div id="loading">
        <span className="loader"></span>
      </div>
      <iframe
        id="map-iframe"
        src="https://flo.uri.sh/visualisation/15022701/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe map"
        frameBorder="0"
        scrolling="no"
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </>
  );
};

export default MapConcejales;
