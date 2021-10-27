const firstName = 'Anf';
const lastName = 'Fun';
const age =16;
const isProgramer = true;
const _ = 'private';
const $ = 'some value';
dsdsd//
const withNum = '5'
alert('Имя человека:' + firstName + ',а возраст человека ' + age)
const lastName = prompt('Введите фамилию')
alert(firstName + ' ' + lastName)
let currentYear = 2020
const birthYeare = 2004

const age =currentYear - birthYeare
console.log(age)
const a =10
const b = 5
let c = 32
c+=a
console.log(a+b)
console.log(a-b)
console.log(++currentYear)
console.log(c)
const isProgramer = true
const name = 'AnfFun'
const age = 17
let x
console.log(typeof isProgramer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(null)

const fullAge =17 
const birthYear = 2004
const currentYear = 2021

const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge)

const body = document.('bgetElementByIdody');
body.style.background = 'red';

const courseStatus = ''

if(courseStatus === 'ready'){
console.log('Курс уже готов и его можно проходить')
}
else if (courseStatus === 'pending'){
	console.log('Курс находиться в процесе разработки')
}
else{
	console.log('Курс не получился')
}

const isReady = true
if(isReady === true){
	console.log('Все готово')
} else{
	console.log('Все не готово')
}
isReady ? console.log('Все готово') : console.log('Все не готово')
function calculateAge(year){
	return 2021 - year
}
let myAge = calculateAge(2004)
console.log(myAge)
function infoAbout(name,year){
	const age = calculateAge(year)
	if(age>0){
	console.log('Человек по имени '+ name + ' сейчас имеет возраст ' + age)
} else{
	console.log('Человек еще не родился')
}

}
infoAbout('Макс', 2021)
const cars = ['Mazda', 'Mercedec', 'Ford']
console.log(cars)
const cars = new Array('Mazda', 'Mercedec', 'Ford')
console.log(cars)
console.log(cars[2])
 const cars = ['Mazda', 'Mercedec', 'Ford']

 for(let i = 0; i<cars.length; i++ ){
	 const car = cars[i]
	 console.log(car)
 }
for (let car of cars){
	console.log(car)
}
const person = {
	firstName: 'Max',
	lastName: 'Prokofiev',
	year:2004,
	languages: ['Ru','En','De'],
	hasWife: false,
	greet:function(){
		console.log('greet from person')
	}

}
console.log(person.firstName)
console.log(person['lastName'])
const key ='year'
console.log(person[key])
person.greet()