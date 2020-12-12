export const control = async (cmd) => {
  return (await window.fetch(`http://10.5.5.9/gp/gpControl/${Array.isArray(cmd) ? cmd.join('/') : cmd}`)).json();
};
