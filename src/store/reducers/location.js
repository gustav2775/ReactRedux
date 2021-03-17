import '../actions/location'

const initState = {
    location: [
        {
            id: 1,
            city: 'Sanct-peterburg',
            rus_name: 'Санкт-Петербург'
        },
        {
            id: 2,
            city: 'Moscow',
            rus_name: 'Москва'
        }
    ]
}

export default function getLocation(state = initState, action) {

    switch (action.type) {
        case 'GET_LOCATION':
            return 

        default:
            return state.location[0];
    }
}