module.exports = {
	columns: 12,
	offset: "24px",
	container: {
		maxWidth: "1600px",
		fields: "24px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		xl: {
			width: "1200px"
		},
		lg: {
			width: "992px"
		},
		md: {
			width: "768px"
		},
		// sm: {
		// 	width: "768px",
		// 	// fields: "24px"
		// },
		xs: {
			width: "576px",
			fields: "16px"
		},
		// xxs: {
		// 	width: "320px",
		// 	fields: "15px"
		// }
	}
}