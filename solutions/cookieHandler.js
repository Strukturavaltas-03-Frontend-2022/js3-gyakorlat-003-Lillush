const cookieHandler = {
  cookieObject: {},
  getAll() {
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookieStr) => {
      const splitCookies = cookieStr.split("=");
      cookieHandler.cookieObject[splitCookies[0]] = splitCookies[1];
    });
  },
  toSessionStorage() {
    Object.entries(this.cookieObject).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
  flush() {
    Object.keys(this.cookieObject).forEach((key) => {
      document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    });
  },
};

export default cookieHandler;
