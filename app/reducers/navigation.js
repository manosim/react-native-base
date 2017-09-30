import { AppNavigator } from '../app-container';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

export default function reducer(state = initialState, action) {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
