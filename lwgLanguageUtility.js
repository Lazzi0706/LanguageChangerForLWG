
// Todo:
/* 
 
 
 
 */
     const languages = [

    // Translate

    {
        'name': 'Russian',
        'tag': 'ruButton',
        'id': 0,
         'options': [
             /* Main menu */
            ['optionsFullScreenButton', 'Полноэкранный режим'],
            ['hotkeyWindowButton', 'Горячие клавиши'],
            ['openFaqButton', 'ЧаВо'],
            ['LoadAIbutton', 'Загрузить ИИ']
            ['switchQueriesButton', 'Всегда показывать всплывающие сообщения'],
            //
            ['faqLink', 'ЧаВо'],
            ['guestLoginPromptButton', 'Выйти'],
            //
            ['windowTitle2', 'Игроки'],
            ['windowTitle', 'Лобби']
            //
            ['lobbyCreateButton', 'Играть'],
            ['singleplayerButton', 'Играть против ИИ'],
            ['ladderButton', 'Рейтинговая игра'],
            ['mapEditorButton', 'Редактор'],
            ['tutorialButtonSpan', 'Обучение'],
            ['replayButton', 'Загрузить повтор'],
            ['lobbySaveReplayButton', 'Сохранить повтор'],
             /* */

        ]
    },

];

// Show up buttons
const languageButton = document.createElement('button');
languageButton.innerHTML = 'Languages';
// Todo:
/* 
 
 
 
 */
const languages = [

    {
        'name': 'Russian',
        'tag': 'ruButton',
        'id': 1,
        'options': [

            ['optionsFullScreenButton', 'Полноэкранный режим'],
            ['hotkeyWindowButton', 'Горячие клавиши'],
            ['openFaqButton', 'ЧаВо'],
            ['LoadAIbutton', 'Загрузить ИИ'],
            ['switchQueriesButton', 'Всегда показывать всплывающие сообщения']

        ]
    }




];

// Show up buttons
const languageButton = document.createElement('button');
languageButton.innerHTML = 'Languages';
$('#optionsButtonsDiv').append(languageButton);
languageButton.onclick = () => {
    let info = '<h1> Select languages </h1> </br>';
    const ruButton = document.createElement('button').innerHTML = languages[0].name;
    info += ruButton;
    displayInfoMsg(info);
};

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
