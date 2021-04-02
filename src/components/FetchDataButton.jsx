import React from "react";
import { useSelector } from "react-redux";

const FetchDataButton = () => {
  const { actions: subscriberActions } = useSelector(({ state }) => state);
  console.log("subscriberActions", subscriberActions);
  // useEffect(() => {
  //   executeActions("GET_TODOS", subscriberActions);
  //   executeActions("DETAIL_TODO", subscriberActions);
  // }, [subscriberActions]);

  return (
    <button
      onClick={() => {
        executeActions("GET_TODOS", subscriberActions);
        executeActions("DETAIL_TODO", subscriberActions);
      }}
    >
      Fetch Data Button
    </button>
  );
};
export default FetchDataButton;

const executeActions = (event, subscribers = []) => {
  return subscribers.filter((s) => s.event === event).map((s) => s.action());
};
