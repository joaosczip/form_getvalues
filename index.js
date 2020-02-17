HTMLFormElement.prototype.getValues = function() {
  const elements = [...this.elements];
  const values = {};
  elements
    .filter(({ type }) => type !== "submit" && type !== "button")
    .map(({ name, value }) => {
      return {
        [name]: value
      };
    })
    .map(value => Object.assign(values, value));
  return values;
};
