export const fetchTodo = (data) => ({
  type: "FETCH_TODO",
  data,
});

export const subscribeAction = (data) => ({
  type: "SUBSCRIBE",
  data,
});

export const unSubscribeAction = (data) => ({
  type: "UNSUBSCRIBE",
  data,
});