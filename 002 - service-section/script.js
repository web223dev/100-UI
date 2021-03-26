const currentWidth = document.documentElement.offsetWidth; 
const rem = (num) => { return num * 10 };
let s0 = 0;
let ratio = 1.4;

if (currentWidth >= 992) {
    s0 = rem(1.6) + (currentWidth * 0.00333); 
    console.log('current s0: 1.6');
} else if (currentWidth >= 768) {
    s0 = rem(1.4) + (currentWidth * 0.00333);
    console.log('current s0: 1.4');
} else if (currentWidth >= 650) {
    s0 = rem(1.25) + (currentWidth * 0.00333);
    console.log('current s0: 1.25');
} else {
    s0 = rem(1.05) + (currentWidth * 0.00333); 
    console.log('current s0: 1.05');
}

let s_1 = s0 / ratio;
let s_2 = s_1 / ratio;
let s_3 = s_2 / ratio;
let s_4 = s_3 / ratio;
let s_5 = s_4 / ratio;
let s_6 = s_5 / ratio;

let s1 = s0 * ratio;
let s2 = s1 * ratio;
let s3 = s2 * ratio;
let s4 = s3 * ratio;
let s5 = s4 * ratio;
let s6 = s5 * ratio;

console.log( '\n', 
    "--s_6: " + s_6.toFixed(4), '\n', 
    "--s_5: " + s_5.toFixed(4), '\n', 
    "--s_4: " + s_4.toFixed(4), '\n', 
    "--s_3: " + s_3.toFixed(4), '\n', 
    "--s_2: " + s_2.toFixed(4), '\n', 
    "--s_1: " + s_1.toFixed(4), '\n', 
    '\n', 
    "--s0: " + s0.toFixed(4), '\n', 
    '\n', 
    "--s1: " + s1.toFixed(4), '\n', 
    "--s2: " + s2.toFixed(4), '\n', 
    "--s3: " + s3.toFixed(4), '\n', 
    "--s4: " + s4.toFixed(4), '\n', 
    "--s5: " + s5.toFixed(4), '\n', 
    "--s6: " + s6.toFixed(4), '\n',
    '\n',
    "--s5 * 3: " + (s5 * 3).toFixed(4), '\n',
    );
