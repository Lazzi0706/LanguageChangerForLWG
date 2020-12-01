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
        this.$selector = document.createElement('button');
        this.$selector.id = option.id;
        this.$selector.style.height = option.height + 'px';
        this.$selector.style.width = option.width + 'px';
        this.$selector.style.position = option.option;
        this.$selector.innerHTML = option.text;
    };
    show() {
        $('#languageBlock').append(this.$selector);
    };
};

class Translator {
    constructor() {

    };
};



// Show up
const ruLangSelector = new Component({
    id: 'ruLangSelector',
    height: 30,
    width: 80.45,
    position: 'absolute',
    text: 'Russian'
});
const engLangSelector = new Component({
    id: 'engLangSelector',
    height: 30,
    width: 80.45,
    position: 'absolute',
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
//   document.querySelector("#optionsFullscreenButton").innerHTML = "Âñåãäà ïîêàçûâàòü ñîîáùåíèÿ";
