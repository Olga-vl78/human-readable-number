module.exports = function toReadable (num) {
let arr;
let result = [], 
dict1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'], 
dict2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'],
dict3 = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'], 
dict4 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen','nineteen'],
dict5 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (num === 0) {
  arr = num.toString().split('');
  result.push('zero'); 
}
else if (num > 0 && num <= 9) {
  arr = num.toString().split('');
  result.push(dict2[dict1.indexOf(arr[0])]); 
}
else if (num > 9 && num < 20) {
  arr = num.toString().split();
  result.push(dict4[dict3.indexOf(arr[0])]); 
}
else if (num >= 20 && num < 100) {
  arr = num.toString().split('');
    if (arr[1] === '0') {
    result.push(dict5[dict1.indexOf(arr[0]) - 1]); 
    } 
    else if (arr[1] !== '0') {
    result.push(`${dict5[(dict1.indexOf(arr[0]) - 1)]} ${dict2[(dict1.indexOf(arr[1]))]}`); 
    }
  }
else if (num >= 100 && num < 1000) {
  arr = num.toString().split('');
  if (arr[1] === '0' && arr[2] === '0') {
    result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred`); 
    }
    else if (arr[1] === '0' && arr[2] !== '0') {
    result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred ${dict2[(dict1.indexOf(arr[2]))]}`);
    }
    else if (arr[1] === '1' && arr[2] === '0') {
    result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred ${dict4[0]}`); 
      }
    else if (arr[1] === '1' && dict1.includes(arr[2])) {
    result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred ${dict4[(dict1.indexOf(arr[2]) + 1)]}`); 
      }
    else if ((arr[1] !== '0' && arr[1] !== '1') && arr[2] == '0') {
    result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred ${dict5[(dict1.indexOf(arr[1]) - 1)]}`);
      } 
    else result.push(`${dict2[(dict1.indexOf(arr[0]))]} hundred ${dict5[(dict1.indexOf(arr[1]) - 1)]} ${dict2[(dict1.indexOf(arr[2]))]}`); 
}
return result;
}  

