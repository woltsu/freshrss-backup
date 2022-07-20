import axios from "axios";
import { baseUrl, password, username } from "./config";
import { withError } from "./util";

export const auth = () =>
  withError<Promise<string>>(async () => {
    const result = await axios.get<string>(
      `${baseUrl}/accounts/ClientLogin?Email=${username}&Passwd=${password}`
    );

    const [, , auth] = result.data.trim().split("\n");

    return auth.split("=")[1];
  });

export const exportSubscriptions = (token: string) =>
  withError<Promise<string>>(async () => {
    const result = await axios.get<string>(
      `${baseUrl}/reader/api/0/subscription/export`,
      {
        headers: {
          Authorization: `GoogleLogin auth=${token}`,
        },
      }
    );

    return result.data;
  });
