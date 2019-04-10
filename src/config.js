let config = {
  //checkPlugCookie、tbPlatform 是固定的不用修改
  checkPlugCookie: "check-plug-cookie", //检测是否安装插件的cookie名称，值在代码中写
  tbPlatform: 'https://we.taobao.com/', //需要抓取数据的淘宝页面域名


  //只要修改这两个参数就可以
  // backEndHost_dev: 'http://molitest.willbe.net.cn/spider', //DEV 用于接收数据的后台接口域名
  backEndHost_dev: 'http://spider.ittun.com/spider', //DEV 用于接收数据的后台接口域名
  backEndHost_pro: 'http://47.107.35.8:8281/spider', //PRO 用于接收数据的后台接口域名

  //请求淘宝接口的时间间隔
  max_interval: 80,
  min_interval: 25,
}


export const app_version = '1.2.3'; //fixed 多添加3个字段
export const app_verSeq = 6;
export const allDataPageSize = 20; //全量获取每页的contentID数目

export default config;