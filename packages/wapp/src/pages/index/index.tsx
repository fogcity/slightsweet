import { View, Text } from "@tarojs/components";
import {
  AtButton,
  AtCard,
  AtIcon,
  AtList,
  AtListItem,
  AtModal,
  AtTabBar,
} from "taro-ui";
import { Swiper, SwiperItem, Button } from "@tarojs/components";
import "./index.scss";
import { useEffect, useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";
import { AtNavBar } from "taro-ui";
import Taro from "@tarojs/taro";
import { Picker } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import { AtAvatar } from "taro-ui";
import { Sharing, User } from "../type";
const DATA = new Array(15).fill({
  title: "学历",
  desc: "高中",
});
const selector = ["大专", "高中", "本科", "研究生"];

const Home = () => {
  const [currentInstance, setCurrentInstance] = useState();
  const [tab, setTab] = useState(0);
  const [selectorChecked, setSelectorChecked] = useState("大专");

  const [sharingList, setSharingList] = useState<Array<Sharing>>([
    {
      id: "1",
      userId: "1",
      type: 3,
      title: "分享一个渣男的聊天！姐妹们擦亮眼！",
      content:
        "kljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfh",
      time: "111",
    },
    {
      id: "1",
      userId: "1",
      type: 1,
      title: "卧槽和暗恋的人表白了帮我看看接下来怎么聊！",
      content:
        "kljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfh",
      time: "111",
    },
    {
      id: "1",
      userId: "1",
      type: 2,
      title: "我们的爱情长跑终于结束了分享给大家！",
      content:
        "kljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfhkljfhjkasfh",
      time: "111",
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    nickName: "山城第一深情",
    name: "许晏铭",
  });
  const [blindBoxes, setBlindBoxes] = useState([
    { title: "看电影", desc: "最近有你期待的吗？" },
    { title: "吃个饭", desc: "最近出了一家网红火锅店！" },
    { title: "拍个照", desc: "这个地方好出片！" },
    { title: "拼手气", desc: "也许缘分就是这一次...！" },
    { title: "好运签", desc: "也许真的不一样哦！" },
    { title: "Super", desc: "小哥哥小姐姐都好优秀~" },
  ]);
  const hasUserInfo = Object.keys(userInfo).length > 0;
  const handleTabChange = (t) => {
    setTab(t);
  };

  useEffect(() => {
    // const userInfoString = (Taro as any).getCurrentInstance().router.params.userInfo
    // if(userInfoString){
    //   setUserInfo(JSON.parse(userInfoString))
    // }

    if (!Taro.getStorageSync("userInfo")) {
      Taro.navigateTo({
        url: "/pages/login/index",
      });
    }
  }, []);

  const [isBlindBoxConfirmModalOpened, setIsBlindBoxConfirmModalOpened] =
    useState(false);
  const handleBlindBoxConfirmModalClose = () => {
    setIsBlindBoxConfirmModalOpened(false);
  };
  const handleBlindBoxConfirmModalCancel = () => {
    setIsBlindBoxConfirmModalOpened(false);
  };
  const handleBlindBoxConfirmModalConfirm = () => {
    setIsBlindBoxConfirmModalOpened(false);
  };

  /**
   * 主页模块ui
   * 包括当前活动轮播图，专区宫格，嘉宾长列表
   * @returns ReactNode
   */
  const renderHomeView = () => {
    return (
      <View className="home">
        {/* 活动轮播 */}
        <Swiper
          indicatorColor="#AAA"
          indicatorActiveColor="#EEE"
          indicatorDots
          autoplay
        >
          {["", "", ""].map((v) => (
            <SwiperItem>
              <View className="demo-text-1">{v}</View>
            </SwiperItem>
          ))}
        </Swiper>

        <View className="blind-box-wrapper">
          {blindBoxes.map((v) => {
            return (
              <View
                className="blind-box"
                onClick={() => {
                  setIsBlindBoxConfirmModalOpened(true);
                }}
              >
                {/* <View className="blind-box-img">
                  {v}
                </View> */}
                <View className="blind-box-info">
                  <View style={{ fontSize: "1rem" }}> {v.title}</View>
                  <View style={{ fontSize: ".8rem", color: "#666" }}>
                    {" "}
                    {v.desc}
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <AtModal
          isOpened={isBlindBoxConfirmModalOpened}
          title="确定打开盲盒吗"
          cancelText="取消"
          confirmText="确认"
          onClose={handleBlindBoxConfirmModalClose}
          onCancel={handleBlindBoxConfirmModalCancel}
          onConfirm={handleBlindBoxConfirmModalConfirm}
          content="盲盒好玩啊啊啊"
        />
        {/* 嘉宾列表
      
        <View
          style={{
            padding: ".5em",
          }}
        >
          <View>
            {userList.map((user, index) => (
              <View style={{ padding: ".5em" }}>
                <View className="at-row">
                  <View
                    style={{
                      marginRight: "1em",
                      background: "rgb(181, 168, 184)",
                      width: "4em",
                      height: "4em",
                      borderRadius: "8px",
                    }}
                  >
                    {" "}
                  </View>
                  <View>
                    <View>
                      {user.name} {user.sex == 0 ? "男" : "女"}
                    </View>
                    <View>
                      {user.age}岁 {user.education} {user.height}cm
                    </View>
                    <View>
                      {user.habitation} {user.career} {user.revenue}元
                    </View>
                    <View>{user.photo}</View>
                  </View>
                </View>
                <View className="requirements">
                  {user?.requirements?.remark}
                </View>
              </View>
            ))}
          </View>
        </View> */}
      </View>
    );
  };
  /**
   * 我的模块ui
   * 包括当前情况和数据，VIP信息，个人信息长列表
   * @returns ReactNode
   */
  const renderUserView = () => {
    return (
      <View className="user-container">
        <View className="avatar-container">
          <AtAvatar image="https://jdc.jd.com/img/200"></AtAvatar>
        </View>
        <View className="userinfo-container">
          <View>{userInfo.nickName}</View>
          <View style={{ color: "#e4ddd8" }}>{userInfo.name}</View>
        </View>
        <View className="vip-card">银卡会员</View>
        <View className="setting">
          <AtList>
            {DATA.map((item, index) => (
              <Picker mode="selector" range={selector} onChange={onChange}>
                <AtListItem
                  key={index}
                  title={item.title}
                  extraText={selectorChecked}
                  arrow="right"
                />
              </Picker>
            ))}
          </AtList>
        </View>
      </View>
    );
  };

  const renderPiazzaView = () => {
    return <View className="piazza-container">敬请期待！</View>;
  };
  const onChange = (e) => {
    setSelectorChecked(selector[e.detail.value]);
  };

  // Taro.navigateTo({
  //   url: "/pages/home/index",
  // });

  return (
    <View className="index">
      {tab == 0 && renderHomeView()}
      {tab == 2 && renderPiazzaView()}
      {tab == 1 && renderUserView()}

      <View className="tabbar-container">
        <View className="tabbar">
          <View
            className={
              "tabbar-item" + (tab == 0 ? " tabbar-item-selected" : "")
            }
            onClick={() => handleTabChange(0)}
          >
            {/* 主页 */}
            <AtIcon
              value="home"
              size="20"
              color={tab == 0 ? "#fff" : "#d7a9ad"}
            ></AtIcon>
          </View>
          <View
            className={
              "tabbar-item" + (tab == 2 ? " tabbar-item-selected" : "")
            }
            onClick={() => handleTabChange(2)}
          >
            {/* 广场 */}
            <AtIcon
              value="eye"
              size="20"
              color={tab == 2 ? "#fff" : "#d7a9ad"}
            ></AtIcon>
          </View>
          <View
            className={
              "tabbar-item" + (tab == 1 ? " tabbar-item-selected" : "")
            }
            onClick={() => handleTabChange(1)}
          >
            {/* 我的 */}
            <AtIcon
              value="user"
              size="20"
              color={tab == 1 ? "#fff" : "#d7a9ad"}
            ></AtIcon>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
