// Developer: Osama Hussain
// GitHub:    https://github.com/OsamaHussain

// Counting Each Letter in a Given String
const count_letters = (s) => {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]] || s[i] == " ") {
      continue;
    }
    const b = s.charAt(i).toLowerCase();
    result[b] = s.match(RegExp(s[i], "gi")).length;
  }
  return result;
};

// Just Arranging data Alphabetically and then Converting back to Array
// Sorting Data and Then Changing back to its Original Structure
const sort_alphabetic_arr = (data) => {
  const dataArray = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push({ key: key, value: data[key] });
    }
  }
  dataArray.sort((a, b) => a.key.localeCompare(b.key));
  const sortedData = [];
  dataArray.forEach((item) => {
    sortedData[item.key] = item.value;
  });
  return sortedData;
};

// Usage of this Function
const result = sort_alphabetic_arr(
  count_letters("The rain in SPAIN stays mainly in the plain")
);

console.log(result);
