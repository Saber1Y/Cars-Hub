// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305',
//   headers: {
//     'X-RapidAPI-Key': 'f746eb062fmsh70adfb33544717fp1515bcjsn6d2e53d0f0ba',
//     'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// export async function fetchCars() {
//     const headers = {
//         headers: {
//             'X-RapidAPI-Key': 'f746eb062fmsh70adfb33544717fp1515bcjsn6d2e53d0f0ba',
//             'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
//           }
//     }

//   const res = await fetch( 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305', {
//     headers: headers,
//   })

//   const result = await res.json();

//   return result;
// }