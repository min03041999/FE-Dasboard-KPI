//EFF
export const transformedData_EFF = (data) => {
    return data.map(item => {
        return {
            data_1: item.lineAlias,
            data_2: item.efficiency,
            data_3: item.target
        };
    });
}

//RFT
export const transformedData_RFT = (data) => {
    return data.map(item => {
        return {
            data_1: item.lineAlias,
            data_2: item.rft,
            data_3: item.target
        };
    });
}