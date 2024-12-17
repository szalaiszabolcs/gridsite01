/**
 * const -> változó deklarálásának kulcsszava
 * - értéke nem változtatható meg!!!!
 * - konstans vagyis állandó változók nevét érdemes nagy betűvel írni
 * 
 *  */

const SITE = document.querySelector('.site');
console.log(SITE)

//gomb eltárolása változóba
const TRIGGER = document.querySelector('.trigger');
console.log("Trigger osztályú gomb:", TRIGGER);

//
/**
 * függvény létrehozása
 * 1. function
 * 2. szóköz
 * 3. függvény neve pl: myFunction;
 * 4. kerek zárójel, ide kerül a paraméter
 * milyen paraméterekkel dolgozzon a függvény
 * 5. kapcsos zárójel, ez a függvény scope-ja vagy teste, ide írjuk meg mit szeretnénk, hogy mit hajtson végre, ha a  függvényt meghívjuk 
 */

function revealMenu() {
    SITE.classList.toggle('reveal');
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
   console.log(TRIGGER.innerHTML == 'Close menu')

   /* A conditional vagyis feltételes operátor, az egyetlen operátor, ami 3 bemenetet vár:
   1. feltétel,
   2. any vagyis bármi,
   3. any vagyis bármi;
   
   Működése: 
    ha a feltétel igaz, akkor a második eset fut le, 
    ha a feltétel hamis, akkor a harmadik eset fut le. 

   if(TRIGGER.innerHTML == 'Close menu'){
    TRIGGER.innerHTML = 'Open menu'
   }else{
    TRIGGER.innerHTML = 'Close menu'
   }*/

   /**
    * A függvény csak akkor fut le ha meghívjuk!!! functiona invocation
    * A gombra amit a TRIGGER változóban eltároltunk hozzá kötjük az esemény figyelő metódust ami a js beépített függvénye,
    * Az addEventListener esemény figyelő legalább 2 paramétert vér:
    * 1. mit fogyeljen pl: kattintás, egér esemény, billentyű esemény vagy DOM
    * 2. mi történjen? pl: fusson le egy függvény vagy metódus
    */
}
TRIGGER.addEventListener('click', revealMenu, false);

 