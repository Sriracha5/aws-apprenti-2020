var str = ['AB', 'Ac', null, '', 'sT', 'r', 'V', '2'];
var str2 = ['A', 'B', 'CDE', 'FG'];
function testString(input) {
    if (input) {
        if (/[^A-Z]/.test(input)) {
            throw new Error('Something is wrong.');
        }
        return 'the strign contains "' + input + '".';
    }
    else {
        return null;
    }
}
try {
    str.forEach(function (item) { return console.log(testString(item)); });
}
catch (error) {
    console.log('Something is wrong.');
}
try {
    str2.forEach(function (item) { return console.log(testString(item)); });
}
catch (error) {
    console.log("Something is wrong.");
}
