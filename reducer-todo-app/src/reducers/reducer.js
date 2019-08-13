export const initialState = {
    todos: [
        {item: 'become The Reducer 🤘',
        completed: false,
        id: 3892987589},
        {item: 'take a nap',
        completed: false,
        id: 1528817077286}   
]  
};

export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
          return {
            ...state,
            completed: !state.completed
          };
        case 'ADD_NEW_TODO':
          return {
            ...state,
            item: action.payload,
            completed: false,
            id: Date.now()
          };
        default:
          return state;
      }
};