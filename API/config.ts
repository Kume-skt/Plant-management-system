import { readFileSync } from "fs";

const envfile = process.env.ENV_FILE || ".env";
const data = readFileSync(envfile, "utf8");
const envs: Record<string, string> = {};

data
  .trim()
  .split("\n")
  .forEach((line) => {
    const [k, v] = line.replace(/"/g, "").split("=");

    envs[k] = v;
  });

const {
  REACT_APP_DATABASE_IP,
  REACT_APP_DATABASE_NAME,
  REACT_APP_DATABASE_USER,
  REACT_APP_DATABASE_PASS,
  REACT_APP_MQTT
} = envs;

export const config = {
  ip: REACT_APP_DATABASE_IP || "",
  name: REACT_APP_DATABASE_NAME || "",
  user: REACT_APP_DATABASE_USER || "",
  pass: REACT_APP_DATABASE_PASS || "",
  mqttIp: REACT_APP_MQTT || "",
};
