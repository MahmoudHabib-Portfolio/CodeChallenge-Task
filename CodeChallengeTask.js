//Declaring the sentence as a string
const sntnc = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

//Convert the sentence into an array of sub-strings
const substring = sntnc.split(" ");

//Filtering the Longest Words
const LWords = substring.filter((str) => str.length >= 10);

//Listing the Longest Words
filtermax.map((a) => {
    console.log(`${a}`)
})