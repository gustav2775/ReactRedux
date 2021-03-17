import '../actions/search'

const initState = {
    pages: [
        {
            link: "/",
            name: 'Купоны и сертификаты',
        },
        {
            link: "/",
            name: 'Впечатления',
        },
        {
            link: "/",
            name: 'Авиабилеты',
        },
        {
            link: "/",
            name: 'Отели',
        },
        {
            link: "/",
            name: 'Театры',
        },
        {
            link: "/",
            name: 'Страхование',
        },
        {
            link: "/",
            name: 'Как подключиться',
        },
        {
            link: "/",
            name: 'Партнеры',
        },
        {
            link: "/",
            name: 'Театры',
        },
    ]
}
export default function searchDispacth(state = initState, actions) {
    switch (actions.type) {
        case 'SEARCH':
            return
        default:
            return state
    }
}