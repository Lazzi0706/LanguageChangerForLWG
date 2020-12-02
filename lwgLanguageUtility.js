///////////////////////////
//
//    Utility for translate english text to russian and others languages.
//    My hope to out of early alpha will never die!
//    Made by: Lazzi
//
//////////////////////////

// Keys
const langButtons = [
    {
        'name': 'Russian',
        'id': 0,
        'options': [
            ['optionsFullScreenButton', 'Полноэкранный режим'],
            ['hotkeyWindowButton', 'Горячие клавиши'],
            ['openFaqButton', 'ЧаВо'],
            ['LoadAIbutton', 'Загрузить ИИ']
            ['switchQueriesButton', 'Всегда показывать всплывающие сообщения']
        ]
    },
];

// translations. Start of monkey code.... 

function changeRus() {

    // overload....
     // OPTIONS
    var optionsFullScreenButton = document.querySelector('#optionsFullscreenButton');
    var hotkeyWindowButton = document.querySelector('#hotkeyWindowButton');
    var openFaqButton = document.querySelector('#openFaqButton');
    var loadAIbutton = document.querySelector('#loadAIButton');
    var switchQueriesButton = document.querySelector('#switchQueriesButton');
    optionsFullScreenButton.style.fontSize = 18 + 'px';
    hotkeyWindowButton.style.fontSize = 18 + 'px';
    openFaqButton.style.fontSize = 18 + 'px';
    loadAIbutton.style.fontSize = 18 + 'px';
    switchQueriesButton.style.fontSize = 18 + 'px';

    optionsFullScreenButton.innerHTML = 'Полноэкранный режим';
    hotkeyWindowButton.innerHTML = 'Горячие клавиши';
    openFaqButton.innerHTML = 'ЧаВо';
    loadAIbutton.innerHTML = 'Загрузить ИИ';
    switchQueriesButton.innerHTML = 'Не показывать всплывающие сообщения';

    // OPTIONS: SLIDERS




    //




};

let a = new displayInfoMsg2("Support for other languages is activated! To change the language, go to settings");


 /*
  * 
  * 
  *         OLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLD
  *         OLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLD
  *         OLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLD
  *         OLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLD
  *         OLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLDOLD
  * 
  * 
 /*
// Classes
/*class Component {
    constructor(option) {

        this.$selector = document.createElement('input');

        this.$selector.type = 'button';
        this.$selector.value = option.text;
        this.$selector.onclick = option.task;
        this.$selector.id = option.id;
        this.$selector.style.height = option.height + 'px';
        this.$selector.style.width = option.width + 'px';
        this.$selector.style.position = option.position;

        this.languageArr = ['ru', 'en'];
        this.language = option.languageArr;
    };
    // functions
    show() {
        $('#languageBlock').append(this.$selector);
    };

};*/


/*const ruLangSelector = new Component({
    languageArr: 0,
    task: () => { changeRus() },
    id: 'ruLangSelector',
    height: 30,
    width: 80.45,
    position: 'inherit',
    text: 'Russian'
});*/


/*const engLangSelector = new Component({
    languageArr: 1,
    task: () => { changeEng() },
    id: 'engLangSelector',
    height: 30,
    width: 80.45,
    position: 'inherit',
    text: 'English'
});
engLangSelector.show();*/
