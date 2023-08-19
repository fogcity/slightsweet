import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const Login = () => {
  const [permission, setPermission] = useState(false);

  const handleGetPhoneNumber = (e) => {
    console.log(e.detail);
    let {encryptedData,iv} = e.detail
    Taro.checkSession({
      success(res) {
        console.log('已经登陆');
        const userInfo = {}
        Taro.setStorageSync('userInfo', JSON.stringify(userInfo))
        Taro.navigateTo({
          url: "/pages/index/index",
        });
      },
      fail(res) {
        console.log('未登陆');
        Taro.login({
          success(res) {
            let code = res.code
            Taro.request({
              url:'url',
              method:'GET',
              data:{
                // appid,
                // secret,
                code,
                encryptedData,
                iv
              },  success(phone){
                console.log(phone);
                
              }
            })
          
          }
        })
      },
    })
    };


  const toPolicy = () => {
    Taro.navigateTo({
      url: "/pages/policy/index",
    });
  };

  useEffect(() => {}, []);

  return (
    <View className="login-container">
      <Text className="title"><Text style={{
         background:'#a21522',
         color:'white',
         fontWeight:600,
         padding:'.4em .6em'
      }}>三分糖</Text></Text>
            <Text className="slogan" >PROGRESSIVE QUIT SINGLE AND MAKE FRIENDS</Text>
      <Text className="sub-title">注册成为三分糖Slight Sweet会员</Text>

      <AtButton
        // disabled={!permission}
      
        openType="getPhoneNumber"
        onGetPhoneNumber={handleGetPhoneNumber}
        type="primary"
        className="login-button"
      >
        微信手机号一键登录
      </AtButton>
      
      <View className="permission-container"  onClick={() => setPermission((v) => !v)}>
        <input
          type="checkbox"
          onChange={() => setPermission((v) => !v)}
          id="scales"
          name="scales"
          style={{ marginRight: "1em" }}

          checked={permission}
        />
        若你的手机号未注册，将为你自动注册。注册或登录即代表你已阅读并同意
        <Text
          className="permission"
          onClick={toPolicy}
          style={{ margin: "0 .5em" }}
        >
          {"<<" + "三分糖会员服务协议" + ">>"}
        </Text>
        <Text
          className="permission"
          onClick={toPolicy}
          style={{ margin: "0 .5em" }}
        >
          {"<<" + "三分糖未成年人隐私协议" + ">>"}
        </Text>
        <Text className="permission">{"<<" + "三分糖用户隐私协议" + ">>"}</Text>
      </View>
    </View>
  );
};

export default Login;
