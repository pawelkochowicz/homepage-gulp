!function(g){var n={};function I(c){if(n[c])return n[c].exports;var l=n[c]={i:c,l:!1,exports:{}};return g[c].call(l.exports,l,l.exports,I),l.l=!0,l.exports}I.m=g,I.c=n,I.d=function(g,n,c){I.o(g,n)||Object.defineProperty(g,n,{enumerable:!0,get:c})},I.r=function(g){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},I.t=function(g,n){if(1&n&&(g=I(g)),8&n)return g;if(4&n&&"object"==typeof g&&g&&g.__esModule)return g;var c=Object.create(null);if(I.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:g}),2&n&&"string"!=typeof g)for(var l in g)I.d(c,l,function(n){return g[n]}.bind(null,l));return c},I.n=function(g){var n=g&&g.__esModule?function(){return g.default}:function(){return g};return I.d(n,"a",n),n},I.o=function(g,n){return Object.prototype.hasOwnProperty.call(g,n)},I.p="",I(I.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\nconsole.log(`Hello world!`);\r\n\r\n/* console.log('siema!');                                               //console.log- wyświetla w konsoli w DevTools podaną informację\r\nconst name = 'Paweł';                                                 //const- oznacza zmienną, \r\nconst age = 31;\r\nconsole.log(name);\r\nconsole.log(age);\r\n\r\nconsole.log(`Nazywam się ${name} i mam ${age} lat`);\r\n\r\nconsole.log('Witaj przybyszu :)')  */\r\n\r\n\r\nconst paragraphs = document.querySelectorAll('p');                       //document.querySelectorAll('')-wybór wszystkich podanych znaczników\r\n\r\nconsole.log(paragraphs);\r\nconsole.log(paragraphs[0]);\r\n\r\nconst jsparagraph = document.querySelector('.paragraph__js');                //document.querySelector-wybór konkretnego selektora z HTML\r\nconsole.log(jsparagraph.innerHTML);\r\njsparagraph.innerHTML = 'to jest testowy paragraf do sprawdzenia JS'         //inner.HTML- pozwala w podanym selektorze zmienić tekst\r\n\r\n\r\nif (true)                                                   //if- zwraca true lub false\r\n    console.log('to prawda!')\r\n\r\n/* porównania:\r\n>lewa strona większa od prawej                                                 typeof-zmienna (sprawdza)\r\n<lewa strona mniejsza od prawej\r\n>= lewa strona większa/równa\r\n<=lewa strona mniejsza/równa\r\n== obie strony równe (równa się)\r\n=== obie strony równe (sprawdza typeof)\r\n!= obie strony różne (nie równa się)\r\n!== obie strony różne (sprawdza typeof) */\r\n\r\n/* FALSY:                                     TRUTHY:\r\nfalse                                         cała reszta:)\r\n0                                             'tekst'\r\n''.\"\",``-pusty string                         12\r\nnull                                          -4\r\nundefined                                     {}\r\nNan-not a number                              []\r\n                                            true itd.*/\r\n\r\n/*AND (&&)- wszystkie warunki muszą być true\r\nnp. if((myVariabl == 4) && (otherVar!=='test')) {} \r\n\r\nNOT (!)-odwraca wartość wyrażenia logicznego \r\nnp. if(!('javaScript' == 'Java')){ten kod się wykona}\r\ntrue=true\r\n!true=false */\r\n\r\n/*\r\nif (age > 20) {\r\n    console.log('masz więcej niż 20 lat');\r\n} else {                                     //else-jeśli true to to jeśli false to to drugie\r\n    console.log('masz mniej niż 20 lat');\r\n}\r\n\r\nif (age < 20) {\r\n    console.log('masz mniej niż 20 lat');\r\n} else if ((age >= 20) && (age <= 30)) {                      //else if               \r\n    console.log('masz więcej lub równo 20 lat ale mniej lub równo 30');\r\n} else {\r\n    console.log('masz więcej niż 30 lat');\r\n}\r\n\r\nswitch (age) {                                         //switch- do większej ilości zmiennnych (żeby nie pisać kilka else if itd)\r\n    case 20:\r\n        console.log('masz równo 20 lat')\r\n        break;\r\n    case 30:\r\n        console.log('masz równo 30 lat')\r\n        break;\r\n    default:\r\n            console.log(`masz ${age} lat`) \r\n        break;\r\n}                           \r\n\r\nconst amIOld = (age > 70) ? 'yes' : 'no';    //?- zapis skrócony \r\nconsole.log (amIOld)\r\n\r\n//FUNKCJE:\r\nfunction calculate (x) {\r\n    x = x + 3;\r\n    console.log (x);\r\n    return x*7;\r\n}\r\nconsole.log (calculate(2));\r\n\r\n\r\nconst myCalculation = calculate(4);\r\nconsole.log(myCalculation); \r\n\r\n//(Fat) arrow funktions (funkcje strzałkowe)- skrócony zapis funkcji powyżej\r\n\r\nconst calculateFat = (x) => {\r\n    x = x + 3;\r\n    console.log (x);\r\n    return x*7;\r\n}\r\n\r\nconsole.log (calculateFat(2)); \r\n\r\nconst calculateFatSmall = x => (x+3)*7;     //wersja krótka arrow functions // nawias przy jednej funkcji zbędny\r\n\r\nconsole.log (calculateFatSmall(2))                   */\r\n\r\n//Funkcja powitalna\r\nconst welcome = (name, age) => {\r\n    console.log(`Witaj ${name}, masz ${age} lat`)     //definicja funkcji (nie wykona się)\r\n}\r\n\r\nwelcome('Paweł', 31)     //wywołanie funkcji sposób 1\r\n\r\nconst myName = 'Paweł';\r\nconst myAge = '31';\r\n\r\nwelcome(myName, myAge)\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst button = document.querySelector('.title__button--js');\r\n\r\n\r\nfunction handleClick() {\r\n    console.log('halo')\r\n}\r\n\r\nbutton.addEventListener('click', (e) => {\r\n    const header = document.querySelector('.title__header__js')\r\n    header.innerHTML = 'klik klik'\r\n    header.classList.toggle('title__header--red')\r\n});\r\n\r\n\r\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js')\r\nnavigationSwitcher.addEventListener('click',(e) => {\r\n    const navigationList = document.querySelector('.navigation__list--js')\r\n    navigationList.classList.toggle('navigation__list--visible')\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixLQUFLLFNBQVMsSUFBSTs7QUFFN0M7OztBQUdBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQSw2REFBNkQ7QUFDN0Q7QUFDQTs7O0FBR0EsSUFBSSxJQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyx1Q0FBdUM7QUFDeEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBLEM7O0FBRUEseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7O0FBRUEsdUNBQXVDOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUssU0FBUyxJQUFJO0FBQzNDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcclxuXHJcbi8qIGNvbnNvbGUubG9nKCdzaWVtYSEnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2ctIHd5xZt3aWV0bGEgdyBrb25zb2xpIHcgRGV2VG9vbHMgcG9kYW7EhSBpbmZvcm1hY2rEmVxyXG5jb25zdCBuYW1lID0gJ1Bhd2XFgic7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3QtIG96bmFjemEgem1pZW5uxIUsIFxyXG5jb25zdCBhZ2UgPSAzMTtcclxuY29uc29sZS5sb2cobmFtZSk7XHJcbmNvbnNvbGUubG9nKGFnZSk7XHJcblxyXG5jb25zb2xlLmxvZyhgTmF6eXdhbSBzacSZICR7bmFtZX0gaSBtYW0gJHthZ2V9IGxhdGApO1xyXG5cclxuY29uc29sZS5sb2coJ1dpdGFqIHByenlieXN6dSA6KScpICAqL1xyXG5cclxuXHJcbmNvbnN0IHBhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJyk7ICAgICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJycpLXd5YsOzciB3c3p5c3RraWNoIHBvZGFueWNoIHpuYWN6bmlrw7N3XHJcblxyXG5jb25zb2xlLmxvZyhwYXJhZ3JhcGhzKTtcclxuY29uc29sZS5sb2cocGFyYWdyYXBoc1swXSk7XHJcblxyXG5jb25zdCBqc3BhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhZ3JhcGhfX2pzJyk7ICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3Rvci13eWLDs3Iga29ua3JldG5lZ28gc2VsZWt0b3JhIHogSFRNTFxyXG5jb25zb2xlLmxvZyhqc3BhcmFncmFwaC5pbm5lckhUTUwpO1xyXG5qc3BhcmFncmFwaC5pbm5lckhUTUwgPSAndG8gamVzdCB0ZXN0b3d5IHBhcmFncmFmIGRvIHNwcmF3ZHplbmlhIEpTJyAgICAgICAgIC8vaW5uZXIuSFRNTC0gcG96d2FsYSB3IHBvZGFueW0gc2VsZWt0b3J6ZSB6bWllbmnEhyB0ZWtzdFxyXG5cclxuXHJcbmlmICgnamF2YXNjcmlwdCcgIT0gJ2phdmEnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYtIHp3cmFjYSB0cnVlIGx1YiBmYWxzZVxyXG4gICAgY29uc29sZS5sb2coJ3RvIHByYXdkYSEnKVxyXG5cclxuLyogcG9yw7N3bmFuaWE6XHJcbj5sZXdhIHN0cm9uYSB3acSZa3N6YSBvZCBwcmF3ZWogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mLXptaWVubmEgKHNwcmF3ZHphKVxyXG48bGV3YSBzdHJvbmEgbW5pZWpzemEgb2QgcHJhd2VqXHJcbj49IGxld2Egc3Ryb25hIHdpxJlrc3phL3LDs3duYVxyXG48PWxld2Egc3Ryb25hIG1uaWVqc3phL3LDs3duYVxyXG49PSBvYmllIHN0cm9ueSByw7N3bmUgKHLDs3duYSBzacSZKVxyXG49PT0gb2JpZSBzdHJvbnkgcsOzd25lIChzcHJhd2R6YSB0eXBlb2YpXHJcbiE9IG9iaWUgc3Ryb255IHLDs8W8bmUgKG5pZSByw7N3bmEgc2nEmSlcclxuIT09IG9iaWUgc3Ryb255IHLDs8W8bmUgKHNwcmF3ZHphIHR5cGVvZikgKi9cclxuXHJcbi8qIEZBTFNZOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUUlVUSFk6XHJcbmZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYcWCYSByZXN6dGE6KVxyXG4wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Rla3N0J1xyXG4nJy5cIlwiLGBgLXB1c3R5IHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAxMlxyXG5udWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTRcclxudW5kZWZpbmVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XHJcbk5hbi1ub3QgYSBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgaXRkLiovXHJcblxyXG4vKkFORCAoJiYpLSB3c3p5c3RraWUgd2FydW5raSBtdXN6xIUgYnnEhyB0cnVlXHJcbm5wLiBpZigobXlWYXJpYWJsID09IDQpICYmIChvdGhlclZhciE9PSd0ZXN0JykpIHt9IFxyXG5cclxuTk9UICghKS1vZHdyYWNhIHdhcnRvxZvEhyB3eXJhxbxlbmlhIGxvZ2ljem5lZ28gXHJcbm5wLiBpZighKCdqYXZhU2NyaXB0JyA9PSAnSmF2YScpKXt0ZW4ga29kIHNpxJkgd3lrb25hfVxyXG50cnVlPXRydWVcclxuIXRydWU9ZmFsc2UgKi9cclxuXHJcbi8qXHJcbmlmIChhZ2UgPiAyMCkge1xyXG4gICAgY29uc29sZS5sb2coJ21hc3ogd2nEmWNlaiBuacW8IDIwIGxhdCcpO1xyXG59IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Vsc2UtamXFm2xpIHRydWUgdG8gdG8gamXFm2xpIGZhbHNlIHRvIHRvIGRydWdpZVxyXG4gICAgY29uc29sZS5sb2coJ21hc3ogbW5pZWogbmnFvCAyMCBsYXQnKTtcclxufVxyXG5cclxuaWYgKGFnZSA8IDIwKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbWFzeiBtbmllaiBuacW8IDIwIGxhdCcpO1xyXG59IGVsc2UgaWYgKChhZ2UgPj0gMjApICYmIChhZ2UgPD0gMzApKSB7ICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZSBpZiAgICAgICAgICAgICAgIFxyXG4gICAgY29uc29sZS5sb2coJ21hc3ogd2nEmWNlaiBsdWIgcsOzd25vIDIwIGxhdCBhbGUgbW5pZWogbHViIHLDs3dubyAzMCcpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ21hc3ogd2nEmWNlaiBuacW8IDMwIGxhdCcpO1xyXG59XHJcblxyXG5zd2l0Y2ggKGFnZSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zd2l0Y2gtIGRvIHdpxJlrc3plaiBpbG/Fm2NpIHptaWVubm55Y2ggKMW8ZWJ5IG5pZSBwaXNhxIcga2lsa2EgZWxzZSBpZiBpdGQpXHJcbiAgICBjYXNlIDIwOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXN6IHLDs3dubyAyMCBsYXQnKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzMDpcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFzeiByw7N3bm8gMzAgbGF0JylcclxuICAgICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtYXN6ICR7YWdlfSBsYXRgKSBcclxuICAgICAgICBicmVhaztcclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuY29uc3QgYW1JT2xkID0gKGFnZSA+IDcwKSA/ICd5ZXMnIDogJ25vJzsgICAgLy8/LSB6YXBpcyBza3LDs2NvbnkgXHJcbmNvbnNvbGUubG9nIChhbUlPbGQpXHJcblxyXG4vL0ZVTktDSkU6XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZSAoeCkge1xyXG4gICAgeCA9IHggKyAzO1xyXG4gICAgY29uc29sZS5sb2cgKHgpO1xyXG4gICAgcmV0dXJuIHgqNztcclxufVxyXG5jb25zb2xlLmxvZyAoY2FsY3VsYXRlKDIpKTtcclxuXHJcblxyXG5jb25zdCBteUNhbGN1bGF0aW9uID0gY2FsY3VsYXRlKDQpO1xyXG5jb25zb2xlLmxvZyhteUNhbGN1bGF0aW9uKTsgXHJcblxyXG4vLyhGYXQpIGFycm93IGZ1bmt0aW9ucyAoZnVua2NqZSBzdHJ6YcWCa293ZSktIHNrcsOzY29ueSB6YXBpcyBmdW5rY2ppIHBvd3nFvGVqXHJcblxyXG5jb25zdCBjYWxjdWxhdGVGYXQgPSAoeCkgPT4ge1xyXG4gICAgeCA9IHggKyAzO1xyXG4gICAgY29uc29sZS5sb2cgKHgpO1xyXG4gICAgcmV0dXJuIHgqNztcclxufVxyXG5cclxuY29uc29sZS5sb2cgKGNhbGN1bGF0ZUZhdCgyKSk7IFxyXG5cclxuY29uc3QgY2FsY3VsYXRlRmF0U21hbGwgPSB4ID0+ICh4KzMpKjc7ICAgICAvL3dlcnNqYSBrcsOzdGthIGFycm93IGZ1bmN0aW9ucyAvLyBuYXdpYXMgcHJ6eSBqZWRuZWogZnVua2NqaSB6YsSZZG55XHJcblxyXG5jb25zb2xlLmxvZyAoY2FsY3VsYXRlRmF0U21hbGwoMikpICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4vL0Z1bmtjamEgcG93aXRhbG5hXHJcbmNvbnN0IHdlbGNvbWUgPSAobmFtZSwgYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgV2l0YWogJHtuYW1lfSwgbWFzeiAke2FnZX0gbGF0YCkgICAgIC8vZGVmaW5pY2phIGZ1bmtjamkgKG5pZSB3eWtvbmEgc2nEmSlcclxufVxyXG5cclxud2VsY29tZSgnUGF3ZcWCJywgMzEpICAgICAvL3d5d2/FgmFuaWUgZnVua2NqaSBzcG9zw7NiIDFcclxuXHJcbmNvbnN0IG15TmFtZSA9ICdQYXdlxYInO1xyXG5jb25zdCBteUFnZSA9ICczMSc7XHJcblxyXG53ZWxjb21lKG15TmFtZSwgbXlBZ2UpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZV9fYnV0dG9uLS1qcycpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2hhbG8nKVxyXG59XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlX19oZWFkZXJfX2pzJylcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSAna2xpayBrbGlrJ1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ3RpdGxlX19oZWFkZXItLXJlZCcpXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IG5hdmlnYXRpb25Td2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19zd2l0Y2hlci0tanMnKVxyXG5uYXZpZ2F0aW9uU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19saXN0LS1qcycpXHJcbiAgICBuYXZpZ2F0aW9uTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCduYXZpZ2F0aW9uX19saXN0LS12aXNpYmxlJylcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);