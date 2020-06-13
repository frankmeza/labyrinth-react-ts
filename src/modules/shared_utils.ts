export const uuidv4 = () => {
  const base = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

  const uuid = base.replace(/[xy]/g, char => {
    const randomNumber = (Math.random() * 16) | 0;
    const variation = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;

    return variation.toString(16);
  });

  return uuid;
};
