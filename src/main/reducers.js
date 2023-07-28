import { combineReducers } from 'redux'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer
})

export default rootReducer