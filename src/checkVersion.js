import config from './config'
import {
  app_version,
  app_verSeq,
  allDataPageSize
} from './config'
export const versionObj = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${moli_host}/spider/checkUpdate.wb?vs=${app_verSeq}`,
      success(res) {
        resolve(res);
      },
      faile(err) {
        reject(err)
      }
    })
  })
}
let moli_host, frontEndHost;
if (process.env.NODE_ENV == "local") {
  moli_host = config.backEndHost_dev
  // frontEndHost = config.frontEndHost_dev
  frontEndHost = config.tbPlatform;
} else if (process.env.NODE_ENV == "production") {
  console.log('djla', config.backEndHost_pro)
  moli_host = config.backEndHost_pro
  console.log('djla', moli_host)

  // frontEndHost = config.frontEndHost_pro
  frontEndHost = config.tbPlatform
}

export {
  moli_host,
  frontEndHost
}