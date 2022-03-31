export function shiftArrayForward(array: any[]): any[] {
	const newArray = [...array];
	newArray.unshift(newArray.pop());
	return newArray;
}

export function shiftArrayBackward(array: any[]): any[] {
	const newArray = [...array];
	newArray.push(newArray.shift());
	return newArray;
}
