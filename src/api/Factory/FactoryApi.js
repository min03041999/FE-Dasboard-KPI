import axiosClient from "../axiosClient";

const factoryApi = {
  getFactoryApi: (type, params) => {
    const url = "factory/getDistinctFloor";
    return axiosClient.get(url);
  },
  getFloorDataApi: (date, line) => {
    const url = `factory/getFloorData?date=${date}&line=${line}`;
    return axiosClient.get(url);
  },
};

export { factoryApi };
