import axios from "axios";
const apiGateUrl = "https://hstc-api.testing.keyholding.com/gates/";
const apiTransportUrl = "https://hstc-api.testing.keyholding.com/transport/";

const apiToken = {
  headers: { "x-api-key": process.env.REACT_APP_API_KEY },
};

const getGates = (setGates) => {
  axios
    .get(apiGateUrl, apiToken)
    .then((response) => {
      setGates(response.data);
    })
    .catch((error) => console.error("Error: something went wrong", error));
};

const handleSelectedGate = (gateCode, setSelectedGate) => {
  axios.get(apiGateUrl + gateCode, apiToken).then((response) => {
    setSelectedGate(response.data);
  });
};

const getCheapRoutes = (gateCode, targetGateCode, setCheapRoute) => {
  axios
    .get(`${apiGateUrl}${gateCode}/to/${targetGateCode}`, apiToken)
    .then((response) => {
      setCheapRoute(response.data);
    });
};

const calculateJourneyCost = (distance, number, days, setJourneyResult) => {
  axios
    .get(
      `${apiTransportUrl}${distance}?passengers=${number}&parking=${days}`,
      apiToken
    )
    .then((response) => {
      setJourneyResult(response.data);
    });
};

export { getGates, handleSelectedGate, getCheapRoutes, calculateJourneyCost };
