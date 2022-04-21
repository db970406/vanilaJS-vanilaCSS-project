
export const makeElementTag = ({ element, id, textContent = undefined }) => {
    const makeElement = document.createElement(element);
    id ? makeElement.id = id : undefined;
    makeElement.textContent = textContent;

    return makeElement;
}

export const makeIconTag = ({ id, iconCategory, iconName }) => {
    const iconTag = document.createElement("i");
    id ? iconTag.id = id : undefined;
    iconTag.className = `${iconCategory} ${iconName}`;
    return iconTag;
}

export const makeInputTag = ({ id, type, name, defaultValue, textContent }) => {
    const inputTag = document.createElement("input");
    inputTag.id = id;
    inputTag.type = type;
    inputTag.name = name;
    inputTag.defaultValue = defaultValue;
    inputTag.textContent = textContent;
    return inputTag;
}