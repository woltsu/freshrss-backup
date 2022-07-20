if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

import { auth, exportSubscriptions } from "./api";
import fs from "fs";

const main = async () => {
  const token = await auth();
  const subscriptionExports = await exportSubscriptions(token);
  fs.writeFileSync("./export.opml", subscriptionExports);
};

main();
