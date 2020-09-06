// This file for creating api calls
//  We will write functions to fetch data what we need

import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// async function
export const fetchData = async () => {
    // async return answer from api
    try {
        // get special data from api
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        // destructure data
        // если key и value имею одинаковое имя, то можно не писать
        // key: value, а использовать одно значение
        const modifiedData = { confirmed, recovered, deaths, lastUpdate }

        return modifiedData;
    } catch (error) {

    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {

    }
}

