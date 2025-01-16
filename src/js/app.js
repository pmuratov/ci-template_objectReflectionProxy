export function sortByProps(objSort, arrSort = []) {
  let arr = [];
  for (let key in objSort) {
    if (arrSort.indexOf(key) === -1) {
      arr.push(key);
    }
  }
  arr = [...arrSort, ...arr.sort()];

  const result = [];
  for (let key of arr) {
    result.push({ key, value: objSort[key] });
  }
  return result;
}

export function spAttack(char) {
  const result = [];
  char.special.forEach((num) => {
    const { name, id, icon, description = "Описание недоступно" } = num;

    result.push({
      name,
      id,
      icon,
      description,
    });
  });

  return result;
}
