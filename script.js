do {
    originalString = prompt ('Введите трехзначное число');
    } while (originalString.length != 3);

let n = originalString;
let sum = 0
while (n > 0){
sum += n % 10
n = Math.floor(n/10)
}


if ( sum & 1 ) {
    console.log ( 'нечетно');
} else {
    document.write ('<br> Сумма цифр числа ' + originalString + ' четная');
}

if(sum % 5){
    console.log ('Число ' + originalString + ' не кратно 5')
 }else{
    document.write ('<br> Число ' + originalString + ' кратно 5')
 }

let res = 0;
for (let i = 2; i < originalString.length; i++) {
if (i === 2) {
res = originalString[0] * originalString[1];
}
res *= originalString[i];
}

if (res > 100){
    document.write ('<br> Множество цифр числа ' + originalString + ' больше 100')
} else {
    console.log ('Меньше 100')
}



 let n1 = (n /100);
 let n2 = (n /10)%10;
 let n3 = (n %10);
 if(n1==n2 && n2==n3 && n1==n3)
 document.write ('<br> Найдено совпадение цифр');
 else
 console.log ('Совпадений не найдено');

 let isAll = false;
for (let i = 1; i < originalString.length; i++) {
      if (originalString[i] !== originalString[0]) {
        isAll = false;       
        break;
      } else {
        isAll = true;
      }   
    }
if ( isAll) {
  document.write ('<br> Все цифры числа' +originalString+ 'одинаковые');
} else {
   console.log ('Не все цифры числа' +originalString+ 'одинаковые');
}
