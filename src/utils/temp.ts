/*console.log(prices);
		const width = 800;
		const height = 500;
		const svg = d3.select("svg").attr("width", width).attr("height", height);
		const g = svg.append("g");

		const x = d3.scaleTime().domain(
			d3.extent(prices, function (price: DataType) {
				return parseDate(price.date);
			}) as [Date, Date]
		).rangeRound([0, width]);

		const xaxis = d3.axisBottom<Date>(x).tickFormat(d3.timeFormat('%b'));//.ticks(d3.timeMonth, 1).tickFormat(d3.timeFormat('%b'))
		console.log(xaxis);

		const y = d3.scaleLinear().domain(
			d3.extent(prices, function (price: DataType) {
				return price.value;
			}) as [number, number]
		).rangeRound([height, 0]);

		const line = d3.line<DataType>()
			.x(function (price: DataType) { return x(parseDate(price.date)!); } )
			.y(function (price: DataType) { return y(price.value); });

		g.append("g").attr("transform", "translate(0," + height + ")").call(xaxis);

		g.append("g")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("fill", "#000")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")
			.text("Price ($)");

		g.append("path")
			.datum(prices)
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.attr("stroke-width", 1.5)
			.attr("d", line);*/


/**
 * const x = d3.scaleTime(
			d3.extent(dates, function (date: string) {
				return parseTime(datadate(date));
			}) as [Date, Date]
		).rangeRound([0, width]);
		
		const y = d3.scaleLinear(
			d3.extent(values, function (value: number) {
				return value;
			}) as [number, number]
		).rangeRound([height, 0]);

		/*const area = d3
			.area()
			.x()
			.y0(height)
			.y1()
			.curve(d3.curveCardinal);

		const valueline = d3
			.line()
			.x()
			.y()
			.curve(d3.curveCardinal);

		const svg = d3.select("#root").append("svg").attr(
			"viewBox",
			`0 0 ${width} ${height}`
		)
		.append("g")
		.attr("transform", "translate(0, 0)");

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom<Date>(x).tickFormat(formatMonth)); // format January as Jan etc.

		svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));
 */