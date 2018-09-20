/**
 * @param {string} IP
 * @return {string}
 */
// \d: [0-9]
// ignore :: for ipv6......
// regex.exec(str)
var validIPAddress = function(IP) {
  let ipv4 = /^(\.(([1-9]?|1\d|2[0-4])\d|25[0-5])){4}$/;
  let ipv6 = /^(\:[0-9a-fA-F]{1,4}){8}$/;
  if(ipv4.exec("." + IP)) {
    return "IPv4";
  } else if(ipv6.exec(":" + IP)) {
    return "IPv6";
  } else {
    return "Neither";
  }
};

// str.match(regex)
var validIPAddress = function(IP) {
  let ipv4 = /^(\.(([1-9]?|1\d|2[0-4])\d|25[0-5])){4}$/;
  let ipv6 = /^(\:[0-9a-fA-F]{1,4}){8}$/;
  if(("." + IP).match(ipv4)) {
    return "IPv4";
  } else if((":" + IP).match(ipv6)) {
    return "IPv6";
  } else {
    return "Neither";
  }
};
