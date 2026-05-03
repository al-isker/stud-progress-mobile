type RuPluralForms = {
	one: string;
	few: string;
	many: string;
};

export const getRuPluralForm = (number: number, forms: RuPluralForms) => {
	const fractionalPart = number - Math.trunc(number);

	if (fractionalPart !== 0) {
		return forms.few;
	}

	const lastDigit = Math.abs(number) % 100;

	if (lastDigit >= 5 && lastDigit <= 20) {
		return forms.many;
	} else {
		switch (lastDigit % 10) {
			case 1:
				return forms.one;
			case 2:
			case 3:
			case 4:
				return forms.few;
			default:
				return forms.many;
		}
	}
};
