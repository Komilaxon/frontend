
export const LocalState = (key) => {
  try {
    const serialState = localStorage.getItem(key);
    if (!serialState) return undefined;

    return JSON.parse(serialState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem(key, serialState);
  } catch (error) {
    return false;
  }
};
