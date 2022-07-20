import axios from "axios";

export const withError = async <T>(f: () => T) => {
  try {
    return await f();
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.message);
      console.log(e.response?.data);
    } else {
      console.log(e);
    }

    throw e;
  }
};
