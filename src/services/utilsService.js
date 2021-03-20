export const UtilsService = {
  composeString(...strings) {
    let finalString = "";
    let i = 0;
    for (i; i < strings.length; i++) {
      let currentString = strings[i];
      finalString = `${finalString}${currentString}`;
    }
    return finalString;
  },
};
