/**
 * 校验
 * mr
 * @param card
 * @returns {boolean}
 */
export function isCardNo(card) {
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg =/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
    if(!reg.test(card)){
        return false;
    }else {
        return true
    }
}

/**
 * 根据身份证获取生日
 * @param idCard
 */
export function getBirth(idCard) {
    var birthday = "";
    if(idCard != null && idCard != ""){
        if(idCard.length == 15){
            birthday = "19"+idCard.slice(6,12);
        } else if(idCard.length == 18){
            birthday = idCard.slice(6,14);
        }
        birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");
        //通过正则表达式来指定输出格式为:1990-01-01
    }
    return birthday;
}

function trim(s) { return s.replace(/^\s+|\s+$/g, ""); };

/**
 * 根据身份证获取籍贯
 * @param idCard
 */
export function getProvinceNameByIdNo(idcard) {
    var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
        21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
        33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北",
        43: "湖南", 44: "广东", 45: "广西",
        46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西",
        62: "甘肃", 63: "青海", 64: "宁夏",
        65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
    }

    var provinceName = "";
    var provinceNo = idcard.substr(0, 2);
    if (area[parseInt(provinceNo)] != null) {
        provinceName = area[parseInt(provinceNo)];
    }
    return provinceName;
}