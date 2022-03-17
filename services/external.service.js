const axios = require('axios');
const API_URL = 'https://api.spacexdata.com/v3/capsules';
const capsules = [{}];
async function getExternalWsData() {
    const response = await axios.get(API_URL);
    for (const capsule of response.data) {
        console.log(capsule);
        capsules.push(capsule);
    }
}
getExternalWsData();