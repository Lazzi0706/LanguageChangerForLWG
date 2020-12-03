
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
