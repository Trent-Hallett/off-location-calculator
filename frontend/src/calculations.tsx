


export const totalSpace = (shelfSpace: string, offLocationSpace: string): string => {

    return shelfSpace && offLocationSpace
        ? (Number(shelfSpace) + Number(offLocationSpace)).toString()
        : "";
};

export const offLocationRequest = (totalSpace: string, forcast4wk: string, mpq: string) : string => {

    return totalSpace && forcast4wk && mpq 
    ? (Number(totalSpace) - (Number(forcast4wk)/4) - Number(mpq)).toString()
    : "";
}

export const min = (offLocationRequest: string, mpq: string) :string => {

    return offLocationRequest && mpq 
    ? (Number(offLocationRequest) + Number(mpq)).toString()
    : "";
}

export const max = (min: string, forcast4wk: string) : string => {

    return min && forcast4wk
    ? (Number(min)+(Number(forcast4wk)/4)).toString()
    : "";

}
