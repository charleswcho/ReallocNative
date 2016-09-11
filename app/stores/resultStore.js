import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'
import { PROFILES } from '../constants/profileConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change';

let _desiredPortfolio = [],
    _actualPortfolio = [],
    _actualSum = 0;

class ResultStore extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  desiredPortfolio() {
    return PROFILES[_desiredPortfolio];
  }

  actualPortfolio() {
    return _actualPortfolio;
  }

  actualSum() {
    return _actualSum;
  }
}

function sumActual() {
  if (_actualSum === 0) { // Only sum if not calculated before
    _actualPortfolio.forEach((asset) => {
      _actualSum += asset.y
    })
  }
}

const resultStore = new ResultStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ACTIONS.SUBMIT_DESIRED:
      _desiredPortfolio = action.portfolio
      resultStore.emit(CHANGE_EVENT);
      break;
    case ACTIONS.SUBMIT_ACTUAL:
      _actualPortfolio = action.portfolio
      sumActual()
      resultStore.emit(CHANGE_EVENT);
      break;
    case ACTIONS.CLEAR_DATA:
      _desiredPortfolio = []
      _actualPortfolio = []
      _actualSum = 0
      resultStore.emit(CHANGE_EVENT);
      break;
    default:
      return;
  }
})

export default resultStore;
