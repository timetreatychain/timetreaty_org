/**
 * 函数功能简述
 *
 * common
 *
 * @param    {参数类型}  参数名称     中文解释
 * @returns  void
 *
 * @date      2017.
 * @author   tianxiao<tianxiao@liyunet.com>
 */
(function (w) {
  /**
   * 埋点
   *
   * 具体描述一些细节
   *
   * @param    {参数类型}  参数名称     中文解释
   * @returns  void
   *
   * @date      2017.
   * @author   tianxiao<tianxiao@liyunet.com>
   */
 w.contextPath = "http://192.168.0.70:8080/timetreaty_org"; //----services address


  w.push_PC_VS_NUM = 0; // -- version 
  if (localStorage.push_PC_VS != push_PC_VS_NUM) {
    localStorage.clear();
    localStorage.push_PC_VS = push_PC_VS_NUM;
  }
  w.writeImg = function (ext2) {
    var userAgentInfo = navigator.userAgent;
    var isAndroid = userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Adr') > -1; //android终端
    var isiOS = !!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var time = new Date().getTime(),
      token = localStorage.token || "",
      random = Math.random(),
      frompage = location.href.split("www/wap/")[1],
      os = isAndroid ? "andriod" : "ios",
      type = type;
    var ext1 = {
      't': time,
      'token': token,
      'rand': random,
      'r': frompage,
      'os': os
    }
    eval("var o1 =" + JSON.stringify(ext1));
    eval("var o2=" + JSON.stringify(ext2));
    for (var i in o2) {
      o1[i] = o2[i];
    }
    extStr = escape(JSON.stringify(o1));
    $("body").append('<img src="' + contextPath + '/liyu_game/static/data/ly.gif?ext=' + extStr + '"/>');
  }

  /**
   * 获取地址
   *
   * 具体描述一些细节
   *
   * @param    {参数类型}  url     location.search
   * @returns  void
   * 
   * @date      2017.
   * @author   tianxiao<tianxiao@liyunet.com>
   */
  w.getUrl = function (url) {
    var Request = new Object();
    if (url.indexOf("?") != -1 && url.indexOf("=") != -1) {
      var str = url.split("?")[1];
      str = str.split("?")[0];

      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        Request[i] = unescape((strs[i].split("=")[1]).split("#")[0]);
      }
    }
    return Request;

  }

  w.reloadPage = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      var strCatch = "?catch=" + 10000 * Math.random();
      location.href = location.href.replace(/index.html/g, "index.html" + strCatch);
    } else {
      location.reload();
    }
  }
})(window);

/**
 * 设置字体
 *
 * 具体描述一些细节
 *
 * @param    {参数类型}  参数名称     中文解释
 * @returns  void
 *
 * @date      2017.
 * @author   tianxiao<tianxiao@liyunet.com>
 */

(function (win, doc) {

  win.fontSizes;

  function setFontSize() {
    var winWidth = window.innerWidth; //window.screen.availWidth; // 
    var dpr = window.devicePixelRatio;
    var u = navigator.userAgent;

    doc.documentElement.style.fontSize = (winWidth / 1920) * 100 + 'px';
    win.fontSizes = (winWidth / 1920) * 100;

  }

  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

  var timer = null;

  win.addEventListener(evt, function () {
    clearTimeout(timer);

    timer = setTimeout(setFontSize, 300);
  }, false);

  win.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      clearTimeout(timer);

      timer = setTimeout(setFontSize, 300);
    }
  }, false);

  setFontSize();
}(window, document));
