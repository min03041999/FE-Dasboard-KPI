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

export const transformedData_OutPut = (data) => {
    return data.map(item => {
        return {
            line: item.name_machine,
            target: item.target,
            actual: item.actual,
            remaining: item.remaining
        };
    });
}