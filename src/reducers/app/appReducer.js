import { appActionTypes } from "./appActionTypes";
export function appReducer(state, action) {
  switch (action.type) {
    case appActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case appActionTypes.DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((item) => item.id !== action.payload)],
      };
    case appActionTypes.ADD_TASK:
      console.log(action.payload);
      return { ...state, tasks: [...state.tasks, action.payload] };
    case appActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((item) => item.id !== action.payload)],
      };
    case appActionTypes.DONE_TASK:
      console.log(action.payload, "gjg");

      return {
        ...state,
        tasks: [...action.payload],
      };
    case appActionTypes.SET_FILTER:
      console.log("ff", action.payload);
      return {
        ...state,
        filterType: action.payload,
      };
    case appActionTypes.FILTER_LIST:
      if (state.filterType === "done") {
        return {
          ...state,
          filterTasks: state.tasks.filter(
            (item) =>
              item.isdone === true && item.username.includes(state.filterSearch)
          ),
        };
      } else if (state.filterType === "inprogress") {
        return {
          ...state,
          filterTasks: state.tasks.filter(
            (item) =>
              item.isdone === false &&
              item.username.includes(state.filterSearch)
          ),
        };
      } else {
        return {
          ...state,
          filterTasks: state.tasks.filter((item) =>
            item.username.includes(state.filterSearch)
          ),
        };
      }
    case appActionTypes.SET_SEARCH:
      return {
        ...state,
        filterSearch: action.payload,
      };
    default:
      return state;
  }
}
