/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let output = "Neither";

  let ipv4Check = IP.split(".");
  if (ipv4Check.length === 4) {
    for (let num of ipv4Check) {
      if (num.length > 1 && num[0] === "0") {
        return output;
      }
      if (num.length > 0) {
        let numSplit = num.split("");
        let parsedNum = parseInt(num);
        for (let char of numSplit) {
          if (!(char <= "9" && char >= "0")) {
            return output;
          }
        }
        if (!(parsedNum <= 255 && parsedNum >= 0)) {
          return output;
        }
      } else {
        return output;
      }
    }
    return "IPv4";
  } else {
    let ipv6Check = IP.split(":");
    if (ipv6Check.length !== 8) {
      return output;
    }
    for (let num of ipv6Check) {
      if (num.length < 1 || num.length > 4) {
        return output;
      }
      let numSplit = num.split("");
      for (let char of numSplit) {
        if (!(char.toLowerCase() <= "f" && char.toLowerCase() >= "0")) {
          return output;
        }
      }
    }
    return "IPv6";
  }
};
