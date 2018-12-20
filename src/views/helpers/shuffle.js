const shuffle = array => {
  const names = array;
  console.log("names:", names);
  /// fill const id with the names from the database
  const clonedNames = names.slice(0);
  const ss = [];

  names.forEach(id => {
    const cloneLength = clonedNames.length;
    const rand = Math.floor(Math.random() * cloneLength);
    if (rand === cloneLength - 1) {
      ss.push(clonedNames.splice(rand).toString());
    } else {
      ss.push(clonedNames.splice(rand, 1).toString());
    }
  });
  console.log("finial ss array: ", ss);
  return ss;
};

module.exports = shuffle;
