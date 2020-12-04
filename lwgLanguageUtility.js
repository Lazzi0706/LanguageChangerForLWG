// Todo:
/* 
 
 
 
 */
const languages = [
    {

        'name': 'English',
        'tag': 'engButton',
        'id': 0,
        'lobbie': [

            ['guestLoginPromptButton', 'Log out'],
            ['windowTitle2', 'Players'],
            ['windowTitle', 'Games'],

            ['lobbyCreateButton', 'Play'],
            ['singleplayerButton', 'Play vs CPU'],
            ['ladderButton', 'Ranked Match'],
            ['mapEditorButton', 'Editor'],
            ['replayButton', 'Load Replay'],
            ['lobbySaveReplayButton', 'Save Replay'],
            ['tutorialButton', 'Tutorial'],

        ],
        'options': [

            ['optionsFullScreenButton', 'Fullscreen'],
            ['hotkeyWindowButton', 'Hotkeys'],
            ['openFaqButton', 'F.A.Q.'],
            ['LoadAIbutton', 'Load custom AI'],
            ['switchQueriesButton', 'Always pop up Messages', 'Never pop up Messages', "Don't pop up Messages ingame"],
            ['scrollSpeedLabel', 'Scroll Speed <div id="scrollSpeedButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 40%;"></a></div>'],
            ['musicVolumeLabel', 'Music Volume <div id="optionsMusicButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 80%;"></a></div>'],
            ['soundVolumeLabel', 'Sound Effects Volume <div id="optionsSoundButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 80%;"></a></div>'],
            ['scrollLabel', 'Enable mouse scroll in non fullscreen mode <input id="scrollCheckbox" type="checkbox">'],
            ['mmLabel', 'Invert middle mouse button scrolling <input id="mmCheckbox" type="checkbox">'],
            ['hpBarsLabel', "Don't show HP bars when full HP <input id='hpBarsCheckbox' type='checkbox'>"],
            ['noMainMenuMusicLabel', 'No menu / lobby music <input id="noMainMenuMusicCheckbox" type="checkbox">'],
            ['noRainLabel', 'No Rain effects <input id="noRainCheckbox" type="checkbox">'],


        ],

        'ingame': [


        ],

    },

    {
        'name': 'Russian',
        'tag': 'ruButton',
        'id': 1,
        'lobbie': [

            ['guestLoginPromptButton', 'Выйти'],
            ['windowTitle2', 'Список игроков'],
            ['windowTitle', 'Комнаты'],

            ['lobbyCreateButton', 'Создать игру'],
            ['singleplayerButton', 'Играть против ИИ'],
            ['ladderButton', 'Соревновательная игра'],
            ['mapEditorButton', 'Редактор'],
            ['replayButton', 'Повтор'],
            ['lobbySaveReplayButton', 'Сохранить повтор'],
            ['tutorialButton', 'Обучение'],

        ],
        'options': [

            ['optionsFullScreenButton', 'Полноэкранный режим'],
            ['hotkeyWindowButton', 'Горячие клавиши'],
            ['openFaqButton', 'ЧаВо'],
            ['LoadAIbutton', 'Загрузить ИИ'],
            ['switchQueriesButton', 'Всегда показывать сообщения', 'Никогда не показывать сообщения', 'Не показывать сообщения во время игры'],
            ['scrollSpeedLabel', 'Скорость прокрутки колёсика мыши <div id="scrollSpeedButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 40%;"></a></div>'],
            ['musicVolumeLabel', 'Громкость музыки <div id="optionsMusicButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 80%;"></a></div>'],
            ['soundVolumeLabel', 'Громкость звуков <div id="optionsSoundButton" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 80%;"></a></div>'],
            ['scrollLabel', 'Выключить прокрутку колёсиком мыши вне полноэкранного режима <input id="scrollCheckbox" type="checkbox">'],
            ['mmLabel', 'Инвентировать прокрутку колёсиком мыши <input id="mmCheckbox" type="checkbox">'],
            ['hpBarsLabel', 'Показывать здоровье только при получении урона <input id="hpBarsCheckbox" type="checkbox">'],
            ['noMainMenuMusicLabel', 'Отключить музыку в лобби и меню <input id="noMainMenuMusicCheckbox" type="checkbox">'],
            ['noRainLabel', 'Отключить эффекты дождя <input id="noRainCheckbox" type="checkbox">'],

        ],

        'ingame': [


        ],
    }




];

// Show up buttons

const languageButton = document.createElement('button');
languageButton.innerHTML = 'Languages';
$('#optionsButtonsDiv').append(languageButton);
languageButton.onclick = function langChange() {
    const info1 = ' <h1> Select language </h1> </br> <button onclick = ' + alert('readyRu') + '> ' + languages[1].name + ' </button> ' ;
    const info2 = info1 + ' <button onclick = ' + alert('readyEng') + '> ' + languages[0].name + ' </button> ';
    displayInfoMsg(info2);


};
