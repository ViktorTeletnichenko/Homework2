alert ('Согласно условиям задачи дан цилиндр. Необходимо расчитать его объем. Для начала введите значение радиуса');

do {
_Radius = prompt ('Введите значение радиуса основания используя только числа');
} while (_Radius === '' || isNaN(_Radius));

let _AreaCircle = (Math.PI * _Radius) * 2;

alert ('Теперь введите высоту цилиндра');

do {
_Height = prompt ('Введите значение высоты цилиндра');
} while (_Height === '' || isNaN(_Height));

_Volume = _AreaCircle * _Height;

document.write ('<br> Обьем цилиндра с площадью основы ' + _AreaCircle + ', ')
document.write ('<br> радиусом ' + _Radius + ' и высотой ' + _Height + ' равен: ')
document.write ('<br> --------------------')
document.write ('<br> V = ' + _Volume);
document.write ('<br> --------------------')
document.write ('<br> end.') 