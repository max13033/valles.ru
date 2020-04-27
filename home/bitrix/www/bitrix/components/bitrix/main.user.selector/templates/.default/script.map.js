{"version":3,"sources":["script.js"],"names":["BX","namespace","Main","User","Selector","UserSelector","params","this","caller","container","containerId","id","inputName","inputId","isInputMultiple","inputNode","querySelector","useSymbolicId","openDialogWhenInit","selector","UI","TileSelector","getById","Error","searchInputNode","getSearchInput","lazyload","addCustomEvent","events","buttonSelect","openDialog","bind","tileRemove","removeTile","tileClick","clickTile","SelectorController","init","prototype","initialized","selectorManagerV2","selectorInstance","open","onCustomEvent","selectorId","tile","unsetValue","type","isNotEmptyObject","data","isNotEmptyString","url","urlUseSlider","SidePanel","Instance","window","setUsers","list","addInputs","value","join","fireEvent","getUsers","getInputs","map","split","filter","parseInt","length","setValue","test","selectOne","util","in_array","push","jsonValue","mainSelectorInstance","getOption","parsedItem","JSON","parse","addInput","document","createElement","name","appendChild","removeInputs","forEach","convert","nodeListToArray","querySelectorAll","remove","Controller","userSelector","isOpen","SelectorManager","instances","itemsSelected","itemEntityId","entityId","entities","hasOwnProperty","items","Object","keys","toLowerCase","nodes","input","tag","bindNode","formatName","result","nameTemplate","htmlspecialcharsback","item","field","replace","toUpperCase","select","self","getUserSelector","email","prefix","stringify","readonly","undeletable","entityType","isExtranet","extranet","isCrmEmail","crmEmail","state","addTile","tab","style","display","contextNode","context","unSelect","getTile","deleteSelectedItem","itemId","focus","closeDialog","openSearch","closeSearch","closeByEmptySearchResult","body","contains"],"mappings":"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","file":"script.map.js"}