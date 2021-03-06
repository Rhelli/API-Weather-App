const elementGen = (tag, className = null, idName = null) => {
  const element = document.createElement(tag);
  if (className) { element.classList.add(className); }
  if (idName) { element.id = idName; }
  return element;
};

const textGen = (tag, text, className = null, idName = null, symbol = null) => {
  const element = document.createElement(tag);
  const unparsedText = text.split('');
  const spacedText = [];
  unparsedText.forEach(char => {
    if (char === symbol) {
      spacedText.push(' ');
    } else {
      spacedText.push(char);
    }
  });
  const parsedText = spacedText.join('');
  element.innerHTML = parsedText;
  if (className) { element.classList.add(className); }
  if (idName) { element.id = idName; }
  return element;
};

const countryCodeFormatter = (country) => {
  let array = country.split('');
  array[1] = array[1].toLowerCase('');
  array = array.join('');
  return array;
};

const capitalize = (text) => {
  const parsed = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  return parsed;
};

const uvConverter = (value) => {
  if (value < 2) {
    return 'Low';
  } if (value < 5) {
    return 'Medium';
  } if (value < 7) {
    return 'High';
  } if (value < 10) {
    return 'Very High';
  } if (value > 11) {
    return 'Extremely High';
  }
};

const componentBuilder = (className, idName, ...containers) => {
  const mainContainer = elementGen('div', className, idName);
  containers.forEach(container => {
    mainContainer.append(container);
  });
  return mainContainer;
};

export {
  elementGen, textGen, countryCodeFormatter, capitalize, uvConverter, componentBuilder,
};