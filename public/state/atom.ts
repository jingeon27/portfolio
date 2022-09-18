import { atom } from "recoil";
export const mainPageState = atom({
  key: "mainPageState",
  default: true,
});
export const profilePageState = atom({
  key: "profilePageState",
  default: false,
});
export const aboutmePageState = atom({
  key: "aboutmePageState",
  default: false,
});
export const skillPageState = atom({
  key: "skillPageState",
  default: false,
});
