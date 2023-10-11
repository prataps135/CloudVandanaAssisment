// Function to reverse each word in a sentence
function reverseWordsInSentence(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Taking a sentence as input and reversing each word
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Reversed Sentence:", reversedSentence);

// Sorting an array in descending order
const numbers = [5, 2, 9, 1, 5, 6];
const sortedArray = sortArrayDescending(numbers);

console.log("Sorted Array (Descending):", sortedArray);
