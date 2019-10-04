module.exports = function zeros(expression) {
  const factorials = expression.split("*");
  let fives = 0;
  let deuces = 0;

  factorials.forEach(el => {
    if (el[el.length - 2] !== "!") {
      const num = el.slice(0, -1);
      for (let i = 5; num / i >= 1; i *= 5) {
        fives += Math.floor(num / i);
      }

      for (let i = 2; num / i >= 1; i *= 2) {
        deuces += Math.floor(num / i);
      }
    }

    if (el[el.length - 2] === "!") {
      let num = el.slice(0, -2);
      for (num; num > 0; num -= 2) {
        let current = num;

        for (current; current % 5 === 0; current /= 5) {
          fives++;
        }

        current = num;

        for (current; current % 2 === 0; current /= 2) {
          deuces++;
        }
      }
    }
  });

  return Math.min(fives, deuces);
};
