const algos: any = {};
const names: string[] = [];
const files = (require as any).context("./algorithms", false, /\.(ts|js)/);
files.keys().forEach((key: any) => {
  console.log("kkkkkey", key);
  const _cleanKey = key.replace("./", "").replace(".ts", "").replace(".js", "");
  algos[_cleanKey] = files(key).default || files(key);
  names.push(_cleanKey);
});
export { algos, names };
