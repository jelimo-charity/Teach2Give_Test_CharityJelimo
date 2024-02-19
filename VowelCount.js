// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.

// eg " Hello World " => returns 3

const countVowels = (sentence) => {
    // Convert the sentence to lowercase to make the counting case-insensitive
    let lowercaseSentence = sentence.toLowerCase();

    //the set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // Initialize the count of vowels
    let vowelCount = 0;
    // Iterate through each character in the sentence
    for (let char of lowercaseSentence) {
        // Check if the character is a vowel
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels("Charity Jelimo Kipruto")); 
