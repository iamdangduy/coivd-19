import React from "react";
import Covid from "./components/Covid";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Progress from "./components/Progress";
import VietNamToday from "./components/VietNamToday";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <VietNamToday></VietNamToday>
          <hr className="my-2" />
          <div className="row">
            <h3 className="ml-3">
              Việt Nam <span className="badge badge-info">New</span>
            </h3>
          </div>
          <div className="row">
            <div
              className="col-6"
              style={{
                overflowY: "scroll",
                maxHeight: "380px",
                border: "1px solid black",
                borderRadius: "2px",
                padding: "0px",
              }}
            >
              <Covid></Covid>
            </div>
            <div className="col-6">
              <Progress></Progress>
            </div>
          </div>
          <hr className="my-2 mb-4" />
          <div className="row">
            <div className="col-12">
              <Weather></Weather>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <Pagination></Pagination>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
