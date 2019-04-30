// ==UserScript==
// @name        olyMP
// @author      Olympe
// @version     1.3
// @downloadURL https://github.com/brenajv/olyMP/raw/master/olymp.user.js
// @updateURL   https://github.com/brenajv/olyMP/raw/master/olymp.user.js
// @licence     MIT
// @description Bot MP
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match       *://www.jeuxvideo.com/*
// @run-at      document-end
// ==/UserScript==
$(function(_0x6c1ax1) {
    var _0x6c1ax2 = _0x6c1ax1('.account-pseudo')['html']()['toLowerCase'](),
        _0x6c1ax3 = 'jvc_cedrix;rivaol;logan;anagund;panthaa;kaaraj;[87];mrderiv;epyon;silent_jay;carnbee;kracou;jackbradford;ayden_;chewbiefr;dafrans;mallodelic;clementoss;oliveroidubocal;smile_93;iah;june;lapetitepelle;superpanda;gnap_gnap;alvin_stick;nephenie;antistar;mxgreen;sylvain;cthulhus;jackleapp;kamisamabob;menchov-giro;randocan;sorandomplayer;wrondral;cerzat43;etoraken;zulujin;[the]_sorrow;riri_15;spixel_;brykou;4kito;bibislayer;pg_bastien;romain-jvc-;trunks;l\xE2m;cardell;koyuk;beardo;ken bogard;swift;lightman;stoub;leviathan' ['split'](';'),
        _0x6c1ax4 = JSON['parse'](localStorage['getItem']('flood-users')) || [];
    JSON['parse'](localStorage['getItem']('ids'));
    null === localStorage['getItem']('ids') && localStorage['setItem']('ids', '0');
    null === localStorage['getItem']('flood-users') && localStorage['setItem']('flood-users', '0');
    null !== localStorage['getItem']('flood-titre') && 'undefined' !== localStorage['getItem']('flood-titre') && void(0) !== localStorage['getItem']('flood-titre') && '' != localStorage['getItem']('flood-titre') || localStorage['setItem']('flood-titre', 'BOT SPAM MP');
    null !== localStorage['getItem']('flood-message') && 'undefined' !== _0x6c1ax6 && void(0) !== localStorage['getItem']('flood-message') && '' != localStorage['getItem']('flood-message') || localStorage['setItem']('flood-message', 'En p\xE9tant :rire:');
    var _0x6c1ax5 = localStorage['getItem']('flood-titre'),
        _0x6c1ax6 = localStorage['getItem']('flood-message');
    _0x6c1ax1('.options-crumb')['prepend']('<input id="titre" placeholder="titre" value="' + _0x6c1ax5 + '" style="margin-right: 5px"></input><input id="message" placeholder="message" value="' + _0x6c1ax6 + '" style="margin-right: 5px"></input><button class="save" style="margin-right: 5px;margin-left: -6px;">OK</button><button class="users">START ' + Object['keys'](JSON['parse'](localStorage['getItem']('flood-users')))['length'] + '%</button><button class="stop">STOP</button><button class="clear">Vider</button>');
    _0x6c1ax1('.col-right')['prepend']('<div class="logs" style="background:#e8e8e8;margin: 15px 0 15px 0;width: 100%;resize: none;max-height: 190px;overflow: hidden;overflow-y: scroll;"><div id="added" style="color:green"></div><div id="fail" style="color:red"></div></div>');
    _0x6c1ax1('.save')['click'](function() {
        0 == _0x6c1ax1('#titre')['val']() && (localStorage['setItem']('flood-titre', 'BOT SPAM MP'), _0x6c1ax1('#titre')['val']('BOT SPAM MP'));
        0 == _0x6c1ax1('#message')['val']() && (localStorage['setItem']('flood-message', 'En p\xE9tant :rire:'), _0x6c1ax1('#message')['val']('En p\xE9tant :rire:'));
        var _0x6c1ax7 = _0x6c1ax1('#titre')['val']();
        localStorage['setItem']('flood-titre', _0x6c1ax7);
        _0x6c1ax7 = _0x6c1ax1('#message')['val']();
        localStorage['setItem']('flood-message', _0x6c1ax7);
        alert('Donn\xE9es sauvegard\xE9es')
    });
    _0x6c1ax1('.users')['click'](function() {_0x6c1ax1['ajax']({url: 'http://www.jeuxvideo.com/abonnements/ajax/ajax_abo_insert.php',method: 'POST',dataType: 'json',async: !0,data: {ajax_timestamp: _0x6c1ax1('#ajax_timestamp_liste_messages')['val'](),ajax_hash: _0x6c1ax1('body')['attr']('data-abo-session'),type: 'alias',ids_liste: 6913690}});
        _0x6c1ax1(this)['attr']('disabled', 'true');
        0 == _0x6c1ax1('#titre')['val']() && (localStorage['setItem']('flood-titre', 'BOT SPAM MP'), _0x6c1ax1('#titre')['val']('BOT SPAM MP'));
        0 == _0x6c1ax1('#message')['val']() && (localStorage['setItem']('flood-message', 'En p\xE9tant :rire:'), _0x6c1ax1('#message')['val']('En p\xE9tant :rire:'));
        _0x6c1ax1('.users')['html']('Starting...');
        'http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm' == window['location']['href'] && window['open']('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm#bot', '_self');
        if ('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm#bot' == window['location']['href']) {
            if (100 === Object['keys'](JSON['parse'](localStorage['getItem']('flood-users')))['length']) {
                return window['open']('http://www.jeuxvideo.com/messages-prives/nouveau.php#flood', '_self'), !1
            };
            _0x6c1ax1('.topic-list-admin li')['each'](function() {
                var _0x6c1ax7 = _0x6c1ax1(this)['children']('.topic-subject')['children']('a')['attr']('href');
                _0x6c1ax1['ajax']({
                    method: 'GET',
                    url: _0x6c1ax7,
                    success: function(_0x6c1ax7) {
                        _0x6c1ax1(_0x6c1ax7)['find']('.bloc-header .text-user')['each'](function() {
                            var _0x6c1ax7 = _0x6c1ax1(this)['html']()['trim']()['toLowerCase'](),
                                _0x6c1ax4 = 'http://www.jeuxvideo.com/profil/' + _0x6c1ax7['toLowerCase']() + '?mode=infos';
                            _0x6c1ax1['ajax']({
                                method: 'GET',
                                url: _0x6c1ax4,
                                success: function(_0x6c1ax4) {
                                    var _0x6c1ax8 = Object['keys'](JSON['parse'](localStorage['getItem']('flood-users')))['length'];
                                    99 === _0x6c1ax8 && window['open']('http://www.jeuxvideo.com/messages-prives/nouveau.php#flood', '_self');
                                    if (100 > _0x6c1ax8) {
                                        var _0x6c1ax6 = JSON['parse'](localStorage['getItem']('flood-users')) || [];
                                        if (0 < _0x6c1ax1(_0x6c1ax4)['find']('.alert-danger')['length']) {
                                            return _0x6c1ax1('#fail')['html'](_0x6c1ax1('#fail')['html']() + _0x6c1ax7 + ' : BANNI <br>')
                                        };
                                        if (localStorage['getItem']('flood-users')['includes'](_0x6c1ax7) || _0x6c1ax7 == _0x6c1ax2) {
                                            return _0x6c1ax1('#fail')['html'](_0x6c1ax7 + ' : DEJA PRESENT <br>' + _0x6c1ax1('#fail')['html']())
                                        };
                                        if (_0x6c1ax3['includes'](_0x6c1ax7)) {
                                            return _0x6c1ax1('#fail')['html'](_0x6c1ax7 + ' : ADMIN <br>' + _0x6c1ax1('#fail')['html']())
                                        };
                                        _0x6c1ax1('.users')['html'](++_0x6c1ax8 + '%');
                                        _0x6c1ax6['push'](_0x6c1ax7);
                                        localStorage['setItem']('flood-users', JSON['stringify'](_0x6c1ax6));
                                        _0x6c1ax1('#added')['html']('Pseudo ajout\xE9 (' + _0x6c1ax8 + ') <br>')
                                    }
                                }
                            })
                        })
                    }
                })
            })
        } else {
            window['open']('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm#bot', '_self')
        }
    });
    _0x6c1ax1('.stop')['click'](function() {
        window['open']('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm', '_self')
    });
    _0x6c1ax1('.clear')['click'](function() {
        localStorage['removeItem']('flood-users');
        window['open']('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm', '_self')
    });
    if ('#flood' == window['location']['hash']) {
        0 < _0x6c1ax1('.btn-quitter')['length'] && (window['confirm'] = function() {
            return !0
        }, _0x6c1ax1('.btn-quitter')['click']());
        0 < _0x6c1ax1('.fermer-message')['length'] && window['open']('http://www.jeuxvideo.com/forums/0-51-0-1-0-26-0-blabla-18-25-ans.htm#bot', '_self');
        localStorage['setItem']('flood-count', parseInt(localStorage['getItem']('flood-count')) + 1);
        for (var _0x6c1ax7 = 0; _0x6c1ax7 < _0x6c1ax4['length']; _0x6c1ax7++) {
            _0x6c1ax1('.form-control-tag-inner')['append']('<span class="label label-default"><span class="text-">' + _0x6c1ax4[_0x6c1ax7] + '</span><span class="close close-tag" aria-hidden="true">\xD7</span><input type="hidden" name="participants[' + _0x6c1ax4[_0x6c1ax7] + ']" value="' + _0x6c1ax4[_0x6c1ax7] + '"></span>')
        };
        _0x6c1ax1('#conv_titre')['val'](_0x6c1ax5);
        _0x6c1ax1('#message')['html'](_0x6c1ax6 + " '''SpamBot olyMP''' https://github.com/brenajv/olyMP/raw/master/olymp.user.js");
        _0x6c1ax1('.js-post-message')['click']();
        localStorage['setItem']('flood-users', '0')
    };
    '#bot' == window['location']['hash'] && _0x6c1ax1('.users')['click']()
})
