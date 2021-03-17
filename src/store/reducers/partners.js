import '../actions/variablePartnersCategory'
import '../actions/upViewPartners'

const initState = {
    partners: [
        { id: 1, partner_name: '5пятерочка', img_id: 1, category_id: 1, bonus: true, sale: '15' },
        { id: 2, partner_name: 'М.Видео', img_id: 2, category_id: 8, bonus: true, sale: '5' },
        { id: 3, partner_name: 'Бургер Кинг', img_id: 3, category_id: 8, bonus: true, sale: '1' },
        { id: 4, partner_name: 'Холодильник.ру', img_id: 4, category_id: 2, bonus: false, sale: '3' },
        { id: 5, partner_name: 'BORK', img_id: 5, category_id: 8, bonus: false, sale: '2' },
        { id: 6, partner_name: 'Евросеть', img_id: 6, category_id: 8, bonus: false, sale: '6' },
        { id: 7, partner_name: 'Ламода', img_id: 7, category_id: 6, bonus: true, sale: '5' },
        { id: 8, partner_name: 'IvI', img_id: 8, category_id: 1, bonus: false, sale: '0' },
        { id: 9, partner_name: 'Ozon', img_id: 9, category_id: 9, bonus: true, sale: '4' },
        { id: 10, partner_name: 'Texнопарк', img_id: 10, category_id: 8, bonus: false, sale: '10' },
        { id: 1, partner_name: '5пятерочка', img_id: 1, category_id: 1, bonus: true, sale: '15' },
        { id: 2, partner_name: 'М.Видео', img_id: 2, category_id: 8, bonus: true, sale: '5' },
        { id: 3, partner_name: 'Бургер Кинг', img_id: 3, category_id: 8, bonus: true, sale: '1' },
        { id: 4, partner_name: 'Холодильник.ру', img_id: 4, category_id: 2, bonus: false, sale: '3' },
        { id: 5, partner_name: 'BORK', img_id: 5, category_id: 8, bonus: false, sale: '2' },
        { id: 6, partner_name: 'Евросеть', img_id: 6, category_id: 8, bonus: false, sale: '6' },
        { id: 7, partner_name: 'Ламода', img_id: 7, category_id: 6, bonus: true, sale: '5' },
        { id: 8, partner_name: 'IvI', img_id: 8, category_id: 1, bonus: false, sale: '0' },
        { id: 9, partner_name: 'Ozon', img_id: 9, category_id: 9, bonus: true, sale: '4' },
        { id: 10, partner_name: 'Texнопарк', img_id: 10, category_id: 8, bonus: false, sale: '10' },
        { id: 1, partner_name: '5пятерочка', img_id: 1, category_id: 1, bonus: true, sale: '15' },
        { id: 2, partner_name: 'М.Видео', img_id: 2, category_id: 8, bonus: true, sale: '5' },
        { id: 3, partner_name: 'Бургер Кинг', img_id: 3, category_id: 8, bonus: true, sale: '1' },
        { id: 4, partner_name: 'Холодильник.ру', img_id: 4, category_id: 2, bonus: false, sale: '3' },
        { id: 5, partner_name: 'BORK', img_id: 5, category_id: 8, bonus: false, sale: '2' },
        { id: 6, partner_name: 'Евросеть', img_id: 6, category_id: 8, bonus: false, sale: '6' },
        { id: 7, partner_name: 'Ламода', img_id: 7, category_id: 6, bonus: true, sale: '5' },
        { id: 8, partner_name: 'IvI', img_id: 8, category_id: 1, bonus: false, sale: '0' },
        { id: 9, partner_name: 'Ozon', img_id: 9, category_id: 9, bonus: true, sale: '4' },
        { id: 10, partner_name: 'Texнопарк', img_id: 10, category_id: 8, bonus: false, sale: '10' },
        { id: 10, partner_name: 'Texнопарк', img_id: 10, category_id: 8, bonus: false, sale: '10' },
        { id: 10, partner_name: 'Texнопарк', img_id: 10, category_id: 8, bonus: false, sale: '10' },
    ],
    partnersCategory: false,
    countPartnersView: 5
}
export default function partners(state = initState, action) {
    switch (action.type) {
        case 'VARIABLE_PARTNERS_CATEGORY':
            return {
                ...state,
                partnersCategory: !state.partnersCategory
            }
        case 'UP_VIEW_PARTNERS':
            return {
                ...state,
                countPartnersView:
                    Number(state.countPartnersView) + Number(action.payload),
            }
        default:
            return state
    }
}