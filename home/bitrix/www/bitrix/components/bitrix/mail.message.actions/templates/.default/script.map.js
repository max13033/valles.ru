{"version":3,"sources":["script.js"],"names":["window","BXMailMessageActions","init","options","self","this","handler","createAction","bind","createBtn","BX","messageId","event","value","createMenu","__default","id","disable","addClass","parentNode","enable","removeClass","createMenuBtn","items","isCrmEnabled","push","binded","concat","i","length","splice","text","title","onclick","disabled","Main","MenuManager","show","offsetLeft","angle","closeByEsc","item","failHandler","json","errors","error","map","message","join","top","UI","Notification","Center","notify","autoHideDelay","content","SidePanel","Instance","open","href","pr","ajax","runComponentAction","mode","data","then","destroy","Event","EventEmitter","emit","menuWindow","close"],"mappings":"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","file":"script.map.js"}