var firstNumber=0; //переменная для хранения первого числа
var secondNumber=0; //переменная для хранения второго числа
var operCode=null; //переменная для кода операции по умолчанию не задана
var point1=0; //флаг - что число будет вещественным
var point2=1;//флаг - что число будет вещественным
var minus=true;  //флаг - что число отрицательное
var characters=0; // количество символов при вводе
var res;

function minus_number(){ //реализация функции для отображения числа со знаком минус
	if (minus) { //проверяем значение переменной и при тру добавляем в инпут символ минус по айди
		document.getElementById('result').value = "-";
		minus=false; // отключаем возможность менять знак числа
	}
}

function addDigit(digitToAdd) { //функция добавить цифру в инпут при выполнении условия: // число становится вещественным
	if ( characters < 11 || document.getElementById('result').value== '-' ) // число символов < 12 или в инпуте минус
		if (document.getElementById('result').value=="0" )  // если там 0, то заменить 0 цифрой иначе добавить к предыдущему цифру переданную через аргумент
		{
			document.getElementById('result').value = digitToAdd;
			characters++; // для ограничения количества вводимых символов
		}
		else
		{
			document.getElementById('result').value += digitToAdd;
			characters++; // для ограничения количества вводимых символов
		}
}
function clearTheInput(){ // очистить инпут
	document.getElementById('result').value = '0'; //установить валю инпута в 0
}
function resetAll(){ //сброс параметров в дефолт 
	clearTheInput(); // вызов функции ресетол
	firstNumber=0;  
	secondNumber=0;
	operCode=null;
	point1=0;
	point2=1;
	minus=true;
	characters=0;
}
function operation(operationCode){ //проверка кода операции
	//minus_number(); // поверка числа на знак
	firstNumber = document.getElementById('result').value; // сохраняем первое число 
	secondNumber=0; // устанавливаем второе в 0
	characters=0;
	operCode=operationCode; // сохраняем код арифм. действия
	clearTheInput(); //очистка инпута
	point2=0; // флаг что число будет вещественным
}
function calculate(){ // все готово для вычисления результата
	if (operCode!=null) { // если код операции задан
		//alert(firstNumber);
		secondNumber=document.getElementById('result').value; // сохраняем второе число из инпута
		if (operCode==0) { // если код операции деление делим 
			firstNumber=parseFloat(firstNumber)/parseFloat(secondNumber);
		}
		else if (operCode==1) { // если код операции * умножаем
			firstNumber=parseFloat(firstNumber)*parseFloat(secondNumber);
		}
		else if (operCode==2) {// складываем
			firstNumber=parseFloat(firstNumber)+parseFloat(secondNumber);
		}
		else if (operCode==3) {// вычитаем
			firstNumber=parseFloat(firstNumber)-parseFloat(secondNumber);
		}
		//res=firstNumber;
		//alert(res);
		//firstNumber=Math.trunc(firstNumber*1e10)/1e10;
		document.getElementById('result').value=firstNumber; // результат отображаем в инпуте
		operCode=null; //сброс кода операции
	}
}
function point(){ // реализация функции для отображения вещественного числа
	if (point1==0) { // если была нажата кнопка точка, добавляем к числу точку 
		document.getElementById('result').value += ".";
		point1=1; // точка добавляется всего лишь раз
	}
	if (point2==0) { // тоже для второго числа
		document.getElementById("result").value += ".";
		point2=1;
	}
}