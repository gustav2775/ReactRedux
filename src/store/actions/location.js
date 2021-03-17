export default function location(city) {
    return {
        type: 'GET_LOCATION',
        payload: city
    }
}