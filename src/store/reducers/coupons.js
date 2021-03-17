import '../actions/variableCouponsCategory'
import '../actions/upViewCoupons'
const initState = {
    coupons: [
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 1, id_partner: 1, category_id: 9, img_id: 1, partner_name: '5пятерочка', text: "lorem " },
        { id: 2, id_partner: 2, img_id: 2, category_id: 2, partner_name: 'М.Видео', text: "15% спасибо для студентов" },
        { id: 3, id_partner: 3, img_id: 3, category_id: 3, partner_name: 'Бургер Кинг', text: "lorem " },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
        { id: 4, id_partner: 6, img_id: 6, category_id: 4, partner_name: 'Евросеть', text: '10% спасибо за покупки в черную пятницу' },
        { id: 5, id_partner: 10, img_id: 10, category_id: 1, partner_name: 'Texнопарк', text: '20% спасибо за технику Electrolux' },
    ],
    couponsCategory: 1,
    countCouponsView: 3
}

export default function coupons(state = initState, action) {
    switch (action.type) {
        case 'VARIABLE_COUPONS_CATEGORY':
            return {
                ...state,
                couponsCategory: Number(action.payload),
            }

        case 'UP_VIEW_COUPONS':
            return {
                ...state,
                countCouponsView:
                    Number(state.countCouponsView) + Number(action.payload),
            }
        default:
            return state
    }
}
