import Vue from 'vue';

const http = async (options) => {
    if (typeof options === 'string') {
        options = {
            url: options
        }
    }
    options.url = '/' + options.url;

    let response = await Vue.axios(options);

    // 异常处理
    if (response.status === 401) {
        // 未认证处理
    } else if (response.status === 404) {
        // 未找到页面
    } else if (response.status === 500) {
        // 内部错误
    }

    return response
};

/**
 * 获取当前时间戳
 * @param second int
 * @param micro boolean 是否获取毫秒
 * @returns {number}
 */
const time = (micro = false, second = 0) => {
    let timestamp = new Date().getTime() + (second * 1000);
    if (micro === false) {
        timestamp /= 1000;
    }

    return timestamp
};

/**
 * 获取当前时间
 * @param format string
 * @param second int
 * @returns {string}
 */
const date = (format = 'yyyy-mm-dd hh:ii:ss', second = 0) => {
    let timestamp = time(second, true);
    let date = new Date(timestamp);
    let o = {
        // 月份
        'm+': date.getMonth() + 1,
        // 日
        'd+': date.getDate(),
        // 小时
        'h+': date.getHours(),
        // 分
        'i+': date.getMinutes(),
        // 秒
        's+': date.getSeconds(),
        // 毫秒
        'u': date.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }

    return format;
};

/**
 * 获取本地存储
 * @param name 缓存名称
 * @returns object|boolean
 */
const getStorage = (name) => {
    const json = localStorage.getItem(name);
    if (json === null) {
        return false
    }
    const value = JSON.parse(json);
    if ('expire' in value && value.expire && value.expire < time()) {
        localStorage.removeItem(name);
        return false
    }

    return value.value;
};

/**
 * 设置本地存储
 * @param name 缓存名称
 * @param value 缓存值 null 删除缓存
 * @param expire 有效期 默认永久有效
 * @returns boolean|string
 */
const setStorage = (name, value = null, expire = false) => {
    if (value === null) {
        localStorage.removeItem(name);
        return true;
    } else if (expire) {
        expire = time(expire)
    }

    const obj = JSON.stringify({value: value, expire: expire});
    localStorage.setItem(name, obj);
    return obj
};

const cookie = (name, value, options) => {
  if (typeof value === "undefined") {
    const result = {};
    if (document.cookie) {
      const cookies = document.cookie.split("; ");
      for (let i = 0, len = cookies.length; i < len; i++) {
        const item = cookies[i].split("=");
        result[unescape(item[0])] = unescape(item[1]);
      }
    }
    return name && typeof name === "string" ? result[name] : result;
  }

  const opt =
    !!options && Object.prototype.toString.call(options) === "[object Object]"
      ? options
      : { expires: options };
  let expires = opt.expires !== undefined ? opt.expires : "",
    expiresType = typeof expires;

  if (expiresType === "number") {
    expires = new Date(+new Date() + 1e3 * 60 * 60 * 24 * expires);
  }
  if (expires !== "" && "toGMTString" in expires) {
    expires = "; expires=" + expires.toGMTString();
  }

  const path = "; path=" + (opt.path ? opt.path : "/"),
    domain = opt.domain ? "; domain=" + opt.domain : "",
    secure = opt.secure ? "; secure" : "";
  document.cookie =
    name + "=" + decodeURI(value) + expires + path + domain + secure;
}

export default {
    http,
    time,
    date,
    getStorage,
    setStorage,
    cookie
}
