"use strict";

console.log(`Hello world!`);

/* console.log('siema!');                                               //console.log- wyświetla w konsoli w DevTools podaną informację
const name = 'Paweł';                                                 //const- oznacza zmienną, 
const age = 31;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('Witaj przybyszu :)')  */


const paragraphs = document.querySelectorAll('p');                       //document.querySelectorAll('')-wybór wszystkich podanych znaczników

console.log(paragraphs);
console.log(paragraphs[0]);

const jsparagraph = document.querySelector('.paragraph__js');                //document.querySelector-wybór konkretnego selektora z HTML
console.log(jsparagraph.innerHTML);
jsparagraph.innerHTML = 'to jest testowy paragraf do sprawdzenia JS'         //inner.HTML- pozwala w podanym selektorze zmienić tekst


if ('javascript' != 'java')                                                   //if- zwraca true lub false
    console.log('to prawda!')

/* porównania:
>lewa strona większa od prawej                                                 typeof-zmienna (sprawdza)
<lewa strona mniejsza od prawej
>= lewa strona większa/równa
<=lewa strona mniejsza/równa
== obie strony równe (równa się)
=== obie strony równe (sprawdza typeof)
!= obie strony różne (nie równa się)
!== obie strony różne (sprawdza typeof) */

/* FALSY:                                     TRUTHY:
false                                         cała reszta:)
0                                             'tekst'
''."",``-pusty string                         12
null                                          -4
undefined                                     {}
Nan-not a number                              []
                                            true itd.*/

/*AND (&&)- wszystkie warunki muszą być true
np. if((myVariabl == 4) && (otherVar!=='test')) {} 

NOT (!)-odwraca wartość wyrażenia logicznego 
np. if(!('javaScript' == 'Java')){ten kod się wykona}
true=true
!true=false */

/*
if (age > 20) {
    console.log('masz więcej niż 20 lat');
} else {                                     //else-jeśli true to to jeśli false to to drugie
    console.log('masz mniej niż 20 lat');
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {                      //else if               
    console.log('masz więcej lub równo 20 lat ale mniej lub równo 30');
} else {
    console.log('masz więcej niż 30 lat');
}

switch (age) {                                         //switch- do większej ilości zmiennnych (żeby nie pisać kilka else if itd)
    case 20:
        console.log('masz równo 20 lat')
        break;
    case 30:
        console.log('masz równo 30 lat')
        break;
    default:
            console.log(`masz ${age} lat`) 
        break;
}                           

const amIOld = (age > 70) ? 'yes' : 'no';    //?- zapis skrócony 
console.log (amIOld)

//FUNKCJE:
function calculate (x) {
    x = x + 3;
    console.log (x);
    return x*7;
}
console.log (calculate(2));


const myCalculation = calculate(4);
console.log(myCalculation); 

//(Fat) arrow funktions (funkcje strzałkowe)- skrócony zapis funkcji powyżej

const calculateFat = (x) => {
    x = x + 3;
    console.log (x);
    return x*7;
}

console.log (calculateFat(2)); 

const calculateFatSmall = x => (x+3)*7;     //wersja krótka arrow functions // nawias przy jednej funkcji zbędny

console.log (calculateFatSmall(2))                   */

//Funkcja powitalna
const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat`)     //definicja funkcji (nie wykona się)
}

welcome('Paweł', 31)     //wywołanie funkcji sposób 1

const myName = 'Paweł';
const myAge = '31';

welcome(myName, myAge)






const button = document.querySelector('.title__button--js');


function handleClick() {
    console.log('halo')
}

button.addEventListener('click', (e) => {
    const header = document.querySelector('.title__header__js')
    header.innerHTML = 'klik klik'
    header.classList.toggle('title__header--red')
});


const navigationSwitcher = document.querySelector('.navigation__switcher--js')
navigationSwitcher.addEventListener('click',(e) => {
    const navigationList = document.querySelector('.navigation__list--js')
    navigationList.classList.toggle('navigation__list--visible')
});