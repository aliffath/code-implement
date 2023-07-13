function divideAndSort(number) {
  let temp = number
    .toString()
    .split("0")
    .map((angka) =>
      angka
        .split("")
        .sort((a, b) => a - b)
        .join("")
    );
  const result = parseInt(temp.join(""));
  console.log(result);
}

divideAndSort(59566056159466056);
