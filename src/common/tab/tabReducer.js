const INIT_STATE = { selected: '' }

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload }
    default:
      return state
  }
}