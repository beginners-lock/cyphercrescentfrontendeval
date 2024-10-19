<script setup lang="ts">
  	import * as d3 from "d3";
	import { DataType } from "./utils/types";
	import prices from "./assets/prices.json";
	import { onMounted } from "vue";
	import 'd3-svg-annotation';
	import * as d3annotation from 'd3-svg-annotation';

	const parseTime = d3.timeParse("%Y-%m-%d");
	const timeFormat = d3.timeFormat("%d-%b-%y");

	const dateFormat = (date: string) => {
		return date.slice(0, date.indexOf('T'));
	}

	function drawChart(data: DataType[]){
		console.log(data);
		
		const svgWidth = 1200; const svgHeight = 600;  
		const margin = { top: 20, right: 20, bottom: 30, left: 50 };   
		const width = svgWidth - margin.left - margin.right;   const height = svgHeight - margin.top - margin.bottom;

		const svg = d3.select('svg').attr("width", svgWidth).attr("height", svgHeight);
		const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		const x = d3.scaleTime().rangeRound([0, width]);
		const y = d3.scaleLinear().rangeRound([height, 0]);

		const line = d3.line<DataType>()
					.x(function(d) { return x(parseTime(dateFormat(d.date))!) })
					.y(function(d) { return y(d.value)})   
		
		x.domain( 
			d3.extent(data, function(d: DataType) { 
				return parseTime(dateFormat(d.date)); 
			}) as [Date, Date]
		);
		y.domain([0, 20000]);

		g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
		g.append("g").call(d3.axisLeft(y)).select(".domain").remove().append("text").attr("fill", "#000").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "0.71em").attr("text-anchor", "end").text("Price ($)");

		g.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1.5).attr("d", line);
		//console.log(x.range())

		
		const annotations = [{
			note: {
				label: "Longer text to show text wrapping",
				bgPadding: 20,
				title: "Annotations :)"
			},
			//can use x, y directly instead of data
			data: { date: "2017-08-01", value: 1600 },
			className: "show-bg",
			dy: -100,
			dx: 162
		}];
		
		const type = d3annotation.annotationLabel;
		const makeAnnotations = d3annotation.annotation<DataType>()
			.editMode(true)
			//also can set and override in the note.padding property
			//of the annotation object
			.notePadding(15)
			.type(type)
			//accessors & accessorsInverse not needed
			//if using x, y in annotations JSON
			.accessors({
				x: d => x(parseTime(dateFormat(d.date))!),
				y: d => y(d.value)
			})
			.accessorsInverse({
				date: (d:any) => x.invert(d.x),
				value: (d:any) => y.invert(d.y)
			})
			.annotations(annotations);

		

		svg.append("g")
			.attr("class", "annotation-group")
			.call(makeAnnotations)
	}

	onMounted(()=>{
		drawChart(prices);
	});
</script>

<template>
	<div class="text-3xl font-bold">Rise of Bitcoin</div>
	<svg></svg>
</template>
