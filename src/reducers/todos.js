const defaultState = {
  todosState: {
    todos: [],
    loading: false,
  },
  actions: [],
};

const todos = (state = defaultState, payload) => {
  switch (payload.type) {
    case "FETCH_TODO":
      const { data: todos, loading } = payload.data;
      return {
        ...state,
        todosState: {
          ...state.todosState,
          todos,
          loading,
        },
      };
    case "SUBSCRIBE":
      const { data } = payload;
      return {
        ...state,
        actions: [...state.actions, data],
      };
    case "UNSUBSCRIBE":
      const {
        data: { subscriber },
      } = payload;
      return {
        ...state,
        actions: state.actions.filter((a) => a.subscriber !== subscriber),
      };
    default:
      return { ...state, todosState: { ...state.todosState, loading: true } };
  }
};

export default todos;
