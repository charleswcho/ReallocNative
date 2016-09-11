import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'

export function submitDesired(portfolio) {
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_DESIRED,
    portfolio: portfolio
  });
}

export function submitActual(portfolio) {
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_ACTUAL,
    portfolio: portfolio
  });
}

export function clearData() {
  AppDispatcher.dispatch({
    actionType: ACTIONS.CLEAR_DATA
  });
}
