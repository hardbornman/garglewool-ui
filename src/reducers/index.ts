import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
  counter,
  /** API 接口集合 */
  services: (state = {}) => state
})
