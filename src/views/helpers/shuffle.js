// const shuffle = (names) => {
//   console.log('names:', names);
//   const clonedNames = names.slice(0);
//   const ss = [];

//   names.forEach((name) => {
//     const cloneLength = clonedNames.length;
//     const rand = Math.floor(Math.random() * cloneLength);
//     if (rand === cloneLength - 1) {
//       ss.push(clonedNames.splice(rand));
//     } else {
//       ss.push(clonedNames.splice(rand, 1));
//     }
//   });
//   console.log('finial ss array: ', ss);
//   return ss;
// };

const shuffle = (names) => {
  let secretNames = names.slice();
  const result = [];
  names.forEach((name) => {
    const filteredNames = secretNames.filter((user) => user !== name);
    const length = filteredNames.length;
    const randomNo = Math.floor(Math.random() * length);
    const chosenName = filteredNames[randomNo];
    secretNames = secretNames.filter((item) => item !== chosenName);
    result.push(chosenName);
  });
  if (result.some((item) => item === undefined)) {
    console.log('this has re-run the function');
    return shuffle(names);
  } else {
    console.log('this ran first time');
    return result;
  }
};

// console.log(
//   shuffle(['lucy', 'david', 'hannah', 'oliver', 'charlie', 'fred', 'dorris'])
// );

module.exports = shuffle;
