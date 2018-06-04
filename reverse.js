arr = [
	"Hello world", // -> "world Hello"
	"I hate doing technical tests", // -> "tests technical doing hate I"
	"Holaluz is a great place to work", // -> "work to place great a is Holaluz"
]

function reverseWordsInSentence(str) {
	str = str.split(" ").reverse().join(" ");
	console.log(str);
}

for (var i in arr) {
	reverseWordsInSentence(arr[i]);
}