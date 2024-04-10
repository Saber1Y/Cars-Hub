export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f746eb062fmsh70adfb33544717fp1515bcjsn6d2e53d0f0ba',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const res = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await res.json();
    return result;
}

export const generateCarImage = (car, fullscreen, angle) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, model, year } = car;

    url.searchParams.append('customer', "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append('zoomType', fullscreen.toString());
    url.searchParams.append('angle', `${angle}`);

    return url.toString();
};
