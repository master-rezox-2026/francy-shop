/* Francy China Item Online Shop – site-settings.js
   Admin පිටුවෙන් සුරකින settings (Supabase: site_settings) index.html එකට යොදයි. */
(function () {
  'use strict';

  // ⚠ config.js මෙම ගොනුවට පසුව load වන නිසා, CFG කියවන්නේ load() ක්‍රියාත්මක වන විට (පසුව) පමණි
  var CACHE = 'tl_site_settings';
  var DEFAULT_SOCIAL_BAR = 'https://bauval.org/14/c04bb5b09861f12ad3ba35944bbd3fe9';
  var S = {};
  var fresh = false; // Supabase වෙතින් අලුත් settings ලැබුණාද? (Ad scripts යොදන්නේ ඒ පසුව පමණි)
  var lang = 'en';
  try { S = JSON.parse(localStorage.getItem(CACHE) || '{}') || {}; } catch (e) { S = {}; }
  try { lang = localStorage.getItem('tl_lang') || 'en'; } catch (e) {}

  var $ = function (s) { return document.querySelector(s); };
  var hexOk = function (h) { return /^#[0-9a-f]{6}$/i.test(h || ''); };
  var httpsOk = function (u) { return /^https:\/\//i.test(u || ''); };
  var on = function (k) { return S[k] !== false; };

  // භාෂාවට අදාළ පෙළ: {en,si,ta} හෝ සරල string
  function txt(k) {
    var v = S[k];
    if (v == null) return '';
    if (typeof v === 'string') return v.trim();
    return String(v[lang] || v.en || v.si || v.ta || '').trim();
  }
  function plain(k) { return typeof S[k] === 'string' ? S[k].trim() : ''; }

  // ---------- Colors (CSS variables) ----------
  function rgb(h) {
    h = h.replace('#', '');
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, p) { return a.map(function (v, i) { return Math.round(v + (b[i] - v) * p); }); }
  function setVar(name, c) { document.documentElement.style.setProperty(name, c.join(' ')); }

  function applyColors() {
    var W = [255, 255, 255], K = [0, 0, 0];
    if (hexOk(S.color_brand)) {
      var b = rgb(S.color_brand);
      setVar('--b50', mix(b, W, 0.93));
      setVar('--b100', mix(b, W, 0.82));
      setVar('--b500', mix(b, W, 0.15));
      setVar('--b600', b);
      setVar('--b700', mix(b, K, 0.2));
      setVar('--b800', mix(b, K, 0.38));
    }
    if (hexOk(S.color_accent)) {
      var a = rgb(S.color_accent);
      setVar('--a500', mix(a, W, 0.15));
      setVar('--a600', a);
    }
  }

  // ---------- DOM helpers ----------
  function setText(el, v) {
    if (!el || !v) return;
    el.setAttribute('data-i18n-skip', '');
    if (el.textContent !== v) el.textContent = v;
  }
  function show(el, yes) { if (el) el.style.display = yes ? '' : 'none'; }

  function setLogo(box, url) {
    if (!box || !httpsOk(url)) return;
    if (box.getAttribute('data-logo') === url) return;
    box.setAttribute('data-logo', url);
    box.textContent = '';
    var img = document.createElement('img');
    img.src = url; img.alt = '';
    img.style.cssText = 'width:100%;height:100%;object-fit:contain';
    box.appendChild(img);
    box.style.background = 'transparent';
    box.style.boxShadow = 'none';
  }

  function setLink(selector, url) {
    if (!httpsOk(url)) return;
    var icon = $(selector);
    var a = icon && icon.closest('a');
    if (a) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
  }

  function addScript(id, src) {
    if (!httpsOk(src) || document.getElementById(id)) return;
    var s = document.createElement('script');
    s.id = id; s.async = true; s.src = src;
    s.setAttribute('data-cfasync', 'false');
    document.body.appendChild(s);
  }

  // ---------- Apply everything ----------
  function apply() {
    if (!document.body) return;
    applyColors();

    // General
    var name = plain('shop_name');
    setText($('header a .bg-clip-text'), name);
    setText($('footer span.text-lg.font-bold.text-white'), name);
    setText($('header a span.uppercase'), txt('shop_tagline'));
    setLogo($('header a > div:first-child'), S.logo_url);
    setLogo($('footer .w-8.h-8.rounded-lg'), S.logo_url);

    if (httpsOk(S.favicon_url)) {
      var ic = $('link[rel="icon"]');
      if (!ic) { ic = document.createElement('link'); ic.rel = 'icon'; document.head.appendChild(ic); }
      ic.href = S.favicon_url;
    }
    if (txt('site_title')) document.title = txt('site_title');
    if (txt('meta_description')) {
      var m = $('meta[name="description"]');
      if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
      m.content = txt('meta_description');
    }

    // Top notice bar
    var notice = $('body > div.bg-gradient-to-r');
    show(notice, on('notice_enabled'));
    setText($('body > div.bg-gradient-to-r > span'), txt('notice_text'));

    // Hero
    var hero = $('#homeView > div.mb-8');
    if (hero) {
      var badge = hero.querySelector('span.inline-block');
      var h1 = hero.querySelector('h1');
      var p = hero.querySelector('p');
      var showHero = on('hero_enabled');
      show(badge, showHero); show(h1, showHero); show(p, showHero);
      setText(badge, txt('hero_badge'));
      setText(p, txt('hero_desc'));
      var t1 = txt('hero_title_1'), t2 = txt('hero_title_2');
      if (h1 && (t1 || t2)) {
        h1.setAttribute('data-i18n-skip', '');
        h1.textContent = '';
        h1.appendChild(document.createTextNode(t1 + ' '));
        h1.appendChild(document.createElement('br'));
        var sp = document.createElement('span');
        sp.className = 'text-brand-400';
        sp.textContent = t2;
        h1.appendChild(sp);
      }
    }

    // Sidebar (safety tips)
    var side = $('#homeView .lg\\:col-span-1');
    var main = $('#homeView .lg\\:col-span-3, #homeView .lg\\:col-span-4');
    var showSide = on('show_safety_box');
    show(side, showSide);
    if (main) {
      main.classList.toggle('lg:col-span-3', showSide);
      main.classList.toggle('lg:col-span-4', !showSide);
    }

    // Footer
    setText($('footer .grid > div:first-child > p'), txt('footer_desc'));
    if (plain('support_email')) {
      setText($('footer .grid > div:last-child p.mb-2'), 'Email: ' + plain('support_email'));
      setText($('#contactModal p.font-bold'), 'Email: ' + plain('support_email'));
    }
    setText($('footer .border-t.border-slate-800 p'), plain('copyright'));
    setLink('footer .fa-facebook', S.facebook_url);
    setLink('footer .fa-instagram', S.instagram_url);
    setLink('footer .fa-whatsapp', S.whatsapp_url);

    // Legal / info pages
    ['privacy', 'terms', 'about', 'contact'].forEach(function (k) {
      var body = txt(k + '_text');
      var card = $('#' + k + 'Modal > div');
      if (!body || !card) return;
      var box = card.querySelector('.tl-custom');
      if (!box) {
        card.querySelectorAll('p').forEach(function (n) { n.remove(); });
        box = document.createElement('div');
        box.className = 'tl-custom';
        box.style.whiteSpace = 'pre-line';
        card.appendChild(box);
      }
      box.textContent = body;
    });

    // Ads
    show($('#adTopWrap'), on('ad_top_enabled'));
    if (fresh && on('ad_social_enabled')) addScript('tl-social-bar', httpsOk(S.ad_social_src) ? S.ad_social_src : DEFAULT_SOCIAL_BAR);

    var wrap = $('#adNativeWrap');
    var cid = plain('ad_native_container');
    if (fresh && httpsOk(S.ad_native_src) && /^[\w-]+$/.test(cid) && on('ad_native_enabled')) {
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.id = 'adNativeWrap';
        wrap.className = 'mt-8';
        var lab = document.createElement('p');
        lab.className = 'text-[10px] uppercase tracking-wider text-slate-400 text-center mb-1';
        lab.textContent = 'Advertisement';
        wrap.appendChild(lab);
        var home = $('#homeView');
        if (home) home.appendChild(wrap);
      }
      if (!document.getElementById(cid)) {
        var c = document.createElement('div');
        c.id = cid;
        wrap.appendChild(c);
      }
      addScript('tl-native-ad', S.ad_native_src);
    }
    show(wrap, on('ad_native_enabled'));
  }

  // ---------- Load from Supabase ----------
  // 1) supabase-js (admin පිටුව වැඩ කරන ක්‍රමයම – නව sb_publishable key සමඟ ද නිවැරදියි)
  // 2) අසාර්ථක නම් REST (apikey header පමණි)
  window.TL_SS_VERSION = '3';

  function viaClient() {
    var CFG = window.TL_CONFIG || {};
    if (!window.supabase) return Promise.reject(new Error('supabase-js not loaded'));
    var c = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false, storageKey: 'tl-settings-anon' }
    });
    return c.from('site_settings').select('key,value').then(function (r) {
      if (r.error) throw r.error;
      return r.data;
    });
  }

  function viaRest() {
    var CFG = window.TL_CONFIG || {};
    return fetch(CFG.SUPABASE_URL + '/rest/v1/site_settings?select=key,value', {
      headers: { apikey: CFG.SUPABASE_ANON_KEY, Accept: 'application/json' },
      cache: 'no-store'
    }).then(function (r) {
      return r.json().then(function (body) {
        if (!r.ok || !Array.isArray(body)) throw new Error('REST ' + r.status + ' ' + JSON.stringify(body));
        return body;
      });
    });
  }

  function load() {
    var CFG = window.TL_CONFIG || {};
    if (!CFG.SUPABASE_URL || !CFG.SUPABASE_ANON_KEY || CFG.SUPABASE_URL.indexOf('YOUR_PROJECT') > -1) { fresh = true; apply(); return; }
    viaClient()
      .catch(function (e) {
        console.warn('[site-settings] supabase-js failed, trying REST:', e && e.message ? e.message : e);
        return viaRest();
      })
      .then(function (rows) {
        if (!Array.isArray(rows)) { fresh = true; apply(); return; }
        if (!rows.length) console.info('[site-settings] no rows returned (table empty, or no public read policy).');
        var o = {};
        rows.forEach(function (r) { o[r.key] = r.value; });
        S = o;
        try { localStorage.setItem(CACHE, JSON.stringify(o)); } catch (e) {}
        fresh = true;
        apply();
      })
      .catch(function (e) {
        console.warn('[site-settings] could not load settings:', e && e.message ? e.message : e);
        fresh = true; apply(); // සර්වරයට සම්බන්ධ විය නොහැකි නම් cache එක භාවිතා කරයි
      });
  }

  window.TL_SITE = {
    apply: function (l) { if (l) lang = l; apply(); },
    settings: function () { return S; }
  };

  applyColors(); // cache එකෙන් වහාම වර්ණ යොදයි (flash වැළැක්වීමට)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
