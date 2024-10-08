export const required = (value) => {
  if (!value) return true;
  return undefined;
};

export const email = (email) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email)) return true;
  return undefined;
};

export const phone = (number) => {
  if (!/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/.test(number))
    return true;
  return undefined;
};

export const emailNoReq = (email) => {
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email))
    return true;
  return undefined;
};
