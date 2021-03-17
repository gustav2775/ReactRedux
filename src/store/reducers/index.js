import { combineReducers } from 'redux'
import  coupons from './coupons'
import partners from './partners'
import pages from './pages'
import location from './location'

export default combineReducers({
    coupons:coupons,
    partners:partners,
    pages:pages,
    location:location,
})

