const { remove } = require("lodash");
const _ = require("lodash");
const data1 = [
	{
		age: 3,
		name: "Curtis Greene",
		email: "curtis.greene@zaj.ca",
	},
	{
		age: 23,
		name: "Nikki Lowe",
		email: "nikki.lowe@darwinium.tv",
	},
	{
		age: 39,
		name: "Barr Copeland",
		email: "barr.copeland@nipaz.me",
	},
];

const data2 = [
	{
		age: 29,
		name: "Calhoun Woodward",
		email: "calhoun.woodward@medmex.info",
	},
	{
		age: 21,
		name: "Leta Lee",
		email: "leta.lee@qnekt.com",
	},
	{
		age: 40,
		name: "James Dinh",
		email: "j.dink@erw.com",
	},
];

//task 1
function filterObj(itrblArr) {
	const indexObj = _.findIndex(itrblArr, { age: 23 });
}
console.log(filterObj(data1));
// task 2
function unionArrays(itrblArr1, itrblArr2) {
	const combiArr = _.union(itrblArr1, itrblArr2);
}
//task 3
function removeAge(arr) {
	const noAgeArr = _.map(arr, (obj) => _.omit(obj, "age"));
}
//task 4*

function removeAge2(arr) {
	const noAgeArr = arr.map((obj) => {
		const { name, email, ...age } = obj;
		return { name, email };
	});
}
