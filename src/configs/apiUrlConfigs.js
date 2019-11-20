/**
 * 应用API接口
 * @type {{login: string}}
 */
//jsma
const API_URL = {
  //发送验证码
  sendSmsCode: "/jsma/portal/api/sms/sendSmsCode",
  //验证码校验
  checkSmsCode: "/jsma/portal/api/sms/checkSmsCode",
  //手机号是否存在
  selectPhone: "/jsma/portal/api/LoginAndRegister/selectPhone",
  //注册
  register: "/jsma/portal/api/LoginAndRegister/register",
  //登录
  dologion: "/jsma/portal/api/LoginAndRegister/dologion",
  //密码重置
  resetpass: "/jsma/portal/api/LoginAndRegister/resetpass",
  //订单查询
  orderinfo: "/jsma/portal/api/order/orderinfo",
  //查询学会表
  branch: "/jsma/portal/api/Institute/branch",
  //查询学会资格表
  qualifications: "/jsma/portal/api/Institute/qualifications",
  //申请认证学会
  applicationForCertification: "/jsma/portal/api/Institute/applicationForCertification",
  //我的分会
  chapter: "/jsma/portal/api/Institute/chapter",
  //我的认证申请
  application: "/jsma/portal/api/Institute/application",
  //更新我的认证申请
  Updateapplication: "/jsma/portal/api/Institute/Updateapplication",
  //成员详情
  memberdetails: "/jsma/portal/api/Institute/memberdetails",
  //申请认证详情接口
  applicationForCertificationdetails: "/jsma/portal/api/Institute/applicationForCertificationdetails",
  //新闻详细
  newsdetails: "/jsma/portal/api/Institute/newsdetails",
  //PDF下载
  pdfDownload: "/jsma/portal/api/download/pdfDownload",
  //上传
  upload: "/jsma/portal/api/Upload/upload",
  //微信支付授权
  WxPayment: "/jsma/portal/api/WxPayment/url",
  //微信支付二维码
  WxOrders: "/jsma/portal/api/WxPayment/orders",
  //微信支付医师协会订单
  jsmdaorder: "/jsma/portal/api/pay/jsmdaorder",
  //微信支付成功
  order: "/jsma/portal/api/pay/order",
}

export default API_URL