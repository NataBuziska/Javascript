/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`)
 
 */
let fTemp1=90
let cTemp1 = (fTemp1 - 32) * 5/9;
let kTemp1 = (fTemp1 + 459.67) * 5/9;

let fTemp2 = cTemp1 * 9/5 + 32;
let kTemp2 = cTemp1 + 273.15;

let fTemp3 = kTemp1 * 9/5 - 459.67;
let cTemp2 = kTemp1 - 273.15;

console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);
console.log(`${fTemp1}°F is equals to ${kTemp1}K`);

console.log(`\n${cTemp1}°C is equals to ${fTemp2}°F`)
console.log(`${cTemp1}°C is equals to ${kTemp2}K`)

console.log(`\n${kTemp1}K is equals to ${fTemp3}°F`)
console.log(`${kTemp1}K is equals to ${cTemp2}°C`)