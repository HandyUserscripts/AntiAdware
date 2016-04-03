// ==UserScript==
// @name AntiAdware
// @name:fr AntiAdware
// @name:de AntiAdware
// @name:zh-TW AntiAdware
// @name:zh-CN AntiAdware
// @author noname120
// @namespace HandyUserscripts
// @icon https://i.imgur.com/tq7PJr0.png
// @description Remove forced download accelerators, managers, and adware on supported websites
// @description:fr Évitez les applications indésirables lors des téléchargements sur de nombreux sites avec AntiAdware ! 
// @description:de Mit AntiAdware vermeidest du auf zahlreichen Webseiten den versehentlichen Download von unerwünschten Programmen
// @description:zh-TW AntiAdware, 讓你避免在許多網站上意外下載到廣告軟體.
// @description:zh-CN AntiAdware, 让你避免在许多网站上意外下载到广告软体.
// @version 1.38.1
// @license Creative Commons BY-NC-SA

// jQuery dependency; an offline version of this is included in the script in case it goes down
// @require http://code.jquery.com/jquery-2.0.3.min.js

// @include http://180upload.com/*
// @include http://4upfiles.com/*
// @include http*://get*.adobe.com/*flashplayer/*
// @include http*://get*.adobe.com/*reader/*
// @include http://*afterdawn.com/software/*
// @include http://akafile.com/akago.php
// @include http://*chip.de/downloads/*
// @include http*://*clicknupload.com/*
// @include http://cloudyvideos.com/*
// @include http://*coolrom.com/*/*
// @include http://*clipconverter.cc/download/*
// @include http*://*dailyuploads.net/*
// @include http://*datafilehost.com/d/*
// @include http://*davvas.com/*
// @include http://d-h.st/*
// @include http://download.cnet.com/*
// @include http://telecharger.cnet.com/*
// @include http://descargar.cnet.com/*
// @include http://de.download.cnet.com/*
// @include http*://*filefactory.com/file/*
// @include http*://*filehippo.com/*download*
// @include http://*freewarefiles.com/downloads_counter.php*
// @include http*://*google.*/earth/download/ge/agree.html
// @include http://*hugefiles.net/*
// @include http://hulkload.com/*
// @include http://*kingfiles.net/*
// @include http*://*letitbit.net/download/*
// @include http*://*loveroms.com/*
// @include http*://up.media1fire.com/*
// @include http://mightyupload.com/*
// @include http://*mp3fil.*/get/*
// @include http://mp3juices.to/*
// @include http://*mp3olimp.net/*
// @include http://*mp3olimpz.com/*
// @include http://*opensubtitles.org/*/subtitles/*
// @include http*://revclouds.com/*
// @include http://romhustler.net/download/*
// @include http://romhustler.net/rom/*
// @include http*://*secureupload.eu/*
// @include http*://*sendspace.com/file/*
// @include http://*sharebeast.com/*
// @include http://shared.com/*
// @include http://*softm8.com*
// @include http://*.softonic.*
// @include http://*solidfiles.com/d/*
// @include http*://sourceforge.net/*
// @include http*://*tusfiles.net/*
// @include http://unlimitzone.com/*
// @include http*://uploading.com/*
// @include http*://*uploadshub.com/*
// @include http*://uptobox.com/*
// @include http://*userscdn.com/*
// @include http://*ziddu.com/downloadfile/*

// We don't use this method, however a side effect of it is that it restores the Greasemonkey sandbox, avoiding jQuery conflicts
// @grant GM_addStyle

// @grant unsafeWindow

// @homepageURL https://github.com/HandyUserscripts/AntiAdware#readme
// @supportURL https://github.com/HandyUserscripts/AntiAdware/issues
// @updateURL https://raw.githubusercontent.com/HandyUserscripts/AntiAdware/master/AntiAdware.meta.js
// @downloadURL https://raw.githubusercontent.com/HandyUserscripts/AntiAdware/master/AntiAdware.user.js


// @run-at document-start
// ==/UserScript==
