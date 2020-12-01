///////////////////////////
//
//    Utility for translate english text to russian and others languages.
//    My hope to out of early alpha will never die!
//    Made by: Lazzi
//
//////////////////////////




// Classes
class Component {
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

};

class Translator extends Component {
    constructor() {
        
    };
};
// translations

function changeEng() { console.log('PREPARE TO BATTLE!11111111') };
function changeRus() { console.log('ПРИГОТОВЬТЕСЬ К БИТВЕ!11111111') };

// Show up
const ruLangSelector = new Component({
    languageArr: 0,
    task: () => { changeRus() },
    id: 'ruLangSelector',
    height: 30,
    width: 80.45,
    position: 'inherit',
    text: 'Russian'
});
const engLangSelector = new Component({
    languageArr: 1,
    task: () => { changeEng() },
    id: 'engLangSelector',
    height: 30,
    width: 80.45,
    position: 'inherit',
    text: 'English'
});
//
const languageBlock = document.createElement('div');
languageBlock.id = 'languageBlock';
languageBlock.style.width = 100 + 'px';
languageBlock.style.border = 1 + 'px, solid';
languageBlock.style.margin = 'auto';
$('#optionsButtonsDiv').append(languageBlock);
//
displayInfoMsg2("Support for other languages is activated! To change the language, go to settings")
ruLangSelector.show();
engLangSelector.show();
//   document.querySelector("#optionsFullscreenButton").innerHTML = "Всегда показывать сообщения";
