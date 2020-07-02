const ua = navigator.userAgent;
export const browser = /Edge\/\d+/.test(ua)
  ? "ed"
  : /MSIE 9/.test(ua)
  ? "ie9"
  : /MSIE 10/.test(ua)
  ? "ie10"
  : /MSIE 11/.test(ua)
  ? "ie11"
  : /MSIE\s\d/.test(ua)
  ? "ie?"
  : /rv:11/.test(ua)
  ? "ie11"
  : /Firefox\W\d/.test(ua)
  ? "ff"
  : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua)
  ? "ch"
  : /\bSafari\W\d/.test(ua)
  ? "sa"
  : /\bOpera\W\d/.test(ua)
  ? "op"
  : /\bOPR\W\d/i.test(ua)
  ? "op"
  : typeof MSPointerEvent !== "undefined"
  ? "ie?"
  : "";

export const mobile = /IEMobile|Windows Phone|Lumia/i.test(ua)
  ? "w"
  : /iPhone|iP[oa]d/.test(ua)
  ? "i"
  : /Android/.test(ua)
  ? "a"
  : /BlackBerry|PlayBook|BB10/.test(ua)
  ? "b"
  : /Mobile Safari/.test(ua)
  ? "s"
  : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua)
  ? 1
  : 0;
