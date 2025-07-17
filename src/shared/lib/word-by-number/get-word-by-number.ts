type WordsType = {
	one: string;
	two: string;
	five: string;
};

export const getWordByNumber = (number: number, words: WordsType) => {
	const fractionalPart = number - Math.trunc(number);

	if (fractionalPart !== 0) {
		return words.two;
	}

	const lastDigit = Math.abs(number) % 100;

	if (lastDigit >= 5 && lastDigit <= 20) {
		return words.five;
	} else {
		switch (lastDigit % 10) {
			case 1:
				return words.one;
			case 2:
			case 3:
			case 4:
				return words.two;
			default:
				return words.five;
		}
	}
};
