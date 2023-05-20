class Utils {
	static calculateNumber(type, a, b) {
		let x, y;
		x = Math.round(a)
		y = Math.round(b)
			let res = 0
	
			if (type == "SUM") {
					res = x + y
			} else if (type === "SUBTRACT") {
					res = x - y
			} else if (type === "DIVIDE") {
					if (y === 0) {
							res = 'Error'
					} else {
							res = x / y
					}
			}
	
		return res
	}
}

module.exports = Utils;
