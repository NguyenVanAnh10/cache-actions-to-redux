const data = [
  {
    id: 1,
    text: "Temp",
  },
  {
    id: 2,
    text: "Redhold",
  },
  {
    id: 3,
    text: "Ventosanzap",
  },
  {
    id: 4,
    text: "Bigtax",
  },
  {
    id: 5,
    text: "Keylex",
  },
  {
    id: 6,
    text: "Kanlam",
  },
];
const timeOut = 500;
const apis = {
  getTodos: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeOut);
    });
  },
  getTodo: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.find((d) => d.id === id));
      }, timeOut);
    });
  },
};

export default apis;
