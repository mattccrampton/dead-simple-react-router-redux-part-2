
var config = {};
config["api_hostname"] = "api.mattcrampton.com";

//if(process.env["NODE_ENV"] !== "production"){
  //dev
  //config["api_hostname"] = "192.168.56.101:22281";
//}
window.app_config = config;

export default config
