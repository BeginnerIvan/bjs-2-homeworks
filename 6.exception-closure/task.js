function parseCount(parse) {
	let count = Number.parseFloat(parse)
	if (Number.isNaN(count)) {
		throw new Error("Невалидное значение");
	}
	return count;

}

function validateCount(modParse) {
	try {
		let validate = parseCount(modParse);
		return validate;
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		let p = this.a + this.b + this.c;
		return p;
	}
	get area() {
		let halfPerim = 1 / 2 * (this.a + this.b + this.c);
		let s = Math.sqrt(halfPerim * (halfPerim - this.a) * (halfPerim - this.b) * (halfPerim - this.c));
		return Math.round(s * 1000) / 1000;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}
    