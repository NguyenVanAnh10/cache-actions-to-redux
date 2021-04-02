import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { subscribeAction, unSubscribeAction } from "../actions";
import api from "../api";

const DetailTodo = () => {
  const [issubscribed, setIsSubscribed] = useState(true);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();

  useEffect(() => {
    dispatch(
      subscribeAction({
        event: "DETAIL_TODO",
        subscriber: DetailTodo.name,
        action: () => {
          api.getTodo(3).then((d) => setTodo(d));
        },
      })
    );
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <button
        onClick={() => {
          setIsSubscribed(!issubscribed);
          if (issubscribed) {
            dispatch(
              unSubscribeAction({
                subscriber: DetailTodo.name,
                event: "DETAIL_TODO",
              })
            );
            setTodo();
            return;
          }
          dispatch(
            subscribeAction({
              event: "DETAIL_TODO",
              subscriber: DetailTodo.name,
              action: () => {
                api.getTodo(3).then((d) => setTodo(d));
              },
            })
          );
        }}
      >
        {issubscribed ? "Subscribed" : "Unsubscribed"}
      </button>
      <span style={{ marginLeft: 10 }}>
        getTodo(3): {todo?.id} - {todo?.text}
      </span>
      <div style={{ marginTop: 10 }}>
        <strong>
          Unsubscribed: cannot fetch detail todo when click Fetch Data Button
        </strong>
        <br />
        <strong>
          Subscribed: can fetch detail todo when click Fetch Data Button
        </strong>
      </div>
    </div>
  );
};
export default DetailTodo;
