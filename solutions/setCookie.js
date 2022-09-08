const setCookie = (string) => {
  const expiryDate = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
  document.cookie = `token=${string};expires=${expiryDate}`;
};

export default setCookie;
