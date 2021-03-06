import store from "store";

export const getLanguage = () => store.get("roombelt-language") || "en-US";
export const setLanguage = value => store.set("roombelt-language", value);

export const getFontSize = () => store.get("roombelt-font-size") || 1;
export const setFontSize = value => store.set("roombelt-font-size", value);