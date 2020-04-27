{"version":3,"sources":["script.js"],"names":["window","BX","namespace","Sender","Letter","Page","Helper","this","context","prototype","init","params","containerId","actionUri","isFrame","prettyDateFormat","isSaved","isOutside","mess","letterTile","templateChangeButton","selectorNode","getNode","editorNode","titleNode","buttonsNode","templateNameNode","templateTypeNode","templateIdNode","Template","Selector","selector","addCustomEvent","events","templateSelect","onTemplateSelect","bind","selectorClose","closeTemplateSelector","showTemplateSelector","titleEditor","dataNode","disabled","isTemplateShowed","defaultTitle","getPatternTitle","name","initButtons","top","onCustomEvent","slider","close","UI","Notification","Center","notify","content","outsideSaveSuccess","autoHideDelay","isMSBrowser","classList","add","navigator","userAgent","match","replace","patternTitle","date","format","template","textContent","value","type","code","dispatch","getNodes","forEach","node","getAttribute","fireEvent","scrollTo","changeDisplayingTemplateSelector","isShow","classShow","classHide","changeClass","changeDisplay","disable","enable","applyChanges","form","getElementsByTagName","appendChild","create","attrs"],"mappings":"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","file":"script.map.js"}