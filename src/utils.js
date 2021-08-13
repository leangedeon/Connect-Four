export const reverseObject = (element) => {
    let newElement = []

    for(var i = element.length-1; i>=0; i--) {
        newElement.push(element[i]);
    }

    return newElement;
}
