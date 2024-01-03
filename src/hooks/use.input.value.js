import React from "react";

export const useInputValue = (filds) => {
  const [value, setValue] = React.useState(filds);

  return {
    value,
    changeValue: (e) => setValue({ ...value, [e.target.name]: e.target.value }),
  };
};
