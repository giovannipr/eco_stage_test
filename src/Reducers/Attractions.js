const initialState = {
  all: [],
  isLoading: false,
}

const types = {
  //All list of Attractions
  FETCHS_LIST_SUCCESS: 'FETCHS_LIST_SUCCESS',
  FETCH_LIST_ERROR: 'FETCH_LIST_ERROR',

  //Add new Attraction
  FETCH_ADD_SUCCESS: 'FETCH_ADD_SUCCESS',
  FETCH_ADD_ERROR: 'FETCH_ADD_ERROR',

  //Loading Verify
  REQUEST_START: 'REQUEST_START',
  REQUEST_FINISHED: 'REQUEST_FINISHED',
}
export const actions = {
  getList: () => (dispatch) => {

    return JSON.parse(window.localStorage.getItem('attractions')) || []

  },

  addAttraction: (attraction) => (dispatch) => {

    let currentList = JSON.parse(window.localStorage.getItem('attractions')) || []
    currentList.push(attraction)

    window.localStorage.setItem("attractions", JSON.stringify(currentList));

    return dispatch({
      type: types.FETCH_ADD_SUCCESS,
      payload: JSON.parse(window.localStorage.getItem('attractions')) || []
    })

  },

}
export default (state = initialState, { type, payload }) => {

  switch (type) {
    case types.FETCHS_LIST_SUCCESS:
      return {
        ...state,
        all: payload,
        isLoading: false,
      }

    case types.FETCH_ADD_SUCCESS:
      return {
        ...state,
        all: payload,
        isLoading: false,
      }
      
    case types.REQUEST_START:
      return {
        ...state,
        isLoading: true,
      }

    case types.REQUEST_FINISHED:
     return {
       ...state,
       isLoading: false,
     }
    default:
      return state
  }
}
