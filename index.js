var multipliers = [0x1000000, 0x10000, 0x100, 1]

function ip2long(ip) {
	return ip.split('.').reduce((longValue, part, i) => longValue + part * multipliers[i], 0)
}

function long2ip(longValue) {
	return multipliers.map((multiplier) => Math.floor((longValue % (multiplier * 0x100)) / multiplier)).join('.')
}

function cidrToRange(inputs) {
	var range = []

	inputs.forEach(function(input) {
		if (input.includes('/')) {
			var cidr = input.split('/')
			var start = ip2long(cidr[0])
			var power = Math.pow(2, 32 - cidr[1])

			for(let i = power; i > 0; i--) {
				range.push(long2ip(power + start - i))
			}
		} else {
			range.push(input)
		}
	})

	return range
}
