const listTypes = (data) => {
  const list = [];
  data.map((d) => {
    let found = list.find((f) => f == d.type);
    if (!found) list.push(d.type);
  });
  return list;
};

export default listTypes;
