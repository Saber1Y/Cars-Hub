export async function fetchCars({ filter }) {

    // const [manufacturer, limit, year, fuel] = filter;


    const headers = {
        'X-RapidAPI-Key': 'f746eb062fmsh70adfb33544717fp1515bcjsn6d2e53d0f0ba',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camaro`, {
        headers: headers,
    })

    const result = await res.json();
    return result;x
}

export const generateCarImage = (car, angle) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, modal, year } = car;

    url.searchParams.append('customer', "hrjavascript-mastery");
    url.searchParams.append("make", make);

    // if (typeof model === 'string') {
    //     const modelFamily = model.split(' ')[0];
    //     url.searchParams.append("modelFamily", modelFamily);
    // } else {
    //     console.error("Model is not a valid string:", model);

    // }

    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
};
