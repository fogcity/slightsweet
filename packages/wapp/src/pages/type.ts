
/**
 * 择偶要求
 * @param age 年龄 26
 * @param weight 体重 70（kg）
 * @param height 身高 178
 * @param education 学历 0-初中 1-高中 2-大专 3-本科 4-硕士 5-博士
 * @param marriage 婚姻状况 0-未婚 1-离异未育 2-离异不带孩 3-离异带女 4-离异带男 -丧偶
 * @param career 职业 0-上班族 1-自由职业 2-在校生 3-求职中 4-个体户老板 5-事业单位 6-教师 7-护士 8-医生 9-服务业
 * @param revenue 收入 0-3k 1-3~5k 2-5~8k 3-8~10k 4-1~1.5w 5-1.5~2w 6--2~3w 7-3~4w 8-4w以上
 * @param house 购房情况 0-未购房  1-正在考虑购房  2-已购房有贷款 3-已购房无贷款 4-暂无购房能力
 * @param car 购车情况 0-未购车 1-已经购车 2-需要时购置
 * @param smoking 抽烟情况 0-不吸 1-偶尔 2-经常
 * @param residenceRequirement 居住要求 0-不限 1-愿意和父母同住 2-要独立婚房
 * @param drinking 喝酒情况 0-不喝 1-偶尔 2-经常
 * @param remark 备注要求
 */
export type Requirements = {
    remark: string;
    weight: number;
    height: number;
    education: number;
    career: number;
    house: number;
    car: number;
    residenceRequirement: number;
    revenue: number;
    smoking: number;
    drinking: number;
    marriage: number;
  };
  
/**
 * 用户模型
 * @param id 用户唯一id
 * @param vx 微信号 SylasXu
 * @param avatar 头像 
 * @param phone 手机号 13996092354
 * @param weight 体重 70（kg）
 * @param height 身高 178
 * @param name 用户真实姓名
 * @param birthday 生日 1996-11-13
 * @param age 年龄 26
 * @param habitation 现居地 重庆市大渡口区新城明珠
 * @param home 家乡籍贯 重庆市大渡口区新城明珠
 * @param education 学历 0-初中 1-高中 2-大专 3-本科 4-硕士 5-博士
 * @param marriage 婚姻状况 0-未婚 1-离异未育 2-离异不带孩 3-离异带女 4-离异带男 -丧偶
 * @param career 职业 0-上班族 1-自由职业 2-在校生 3-求职中 4-个体户老板 5-事业单位 6-教师 7-护士 8-医生 9-服务业
 * @param revenue 收入 0-3k 1-3~5k 2-5~8k 3-8~10k 4-1~1.5w 5-1.5~2w 6--2~3w 7-3~4w 8-4w以上
 * @param ethnicity 民族 0-汉族 1-回族 2-维吾尔族 3-苗族 4-彝族 5-其他少数民族
 * @param house 购房情况 0-未购房  1-正在考虑购房  2-已购房有贷款 3-已购房无贷款 4-暂无购房能力
 * @param car 购车情况 0-未购车 1-已经购车 2-需要时购置
 * @param smoking 抽烟情况 0-不吸 1-偶尔 2-经常
 * @param drinking 喝酒情况 0-不喝 1-偶尔 2-经常
 * @param hc 房车情况 0-双无 1-有车无房 2-有房无车 3-有房有车
 * @param sex 0-男 1-女
 * @param introduction 自我介绍
 * @param personality 性格
 * @param interests 爱好
 * @param photo 照片
 * @param requirements 择偶要求
 */
export type User = {
    id?: string;
    avatar:string
    name: string;
    weight: number;
    height: number;
    education: number;
    smoking: number;
    drinking: number;
    career: number;
    marriage: number;
    nickName: string;
    revenue: number;
    requirements?: Requirements;
    ethnicity: number;
    house: number;
    car: number;
    sex: number;
    birthday: string;
    age: number;
    habitation: string;
    home: string;
    vx: string;
    phone: string;
    hc: number;
    introduction: string;
    personality: string[];
    photo: string[];
    interests: string[];
  };

/**
 * 分享类型
 * @param 0 感情求助
 * @param 1 经历分享
 * @param 2 美好瞬间
 * @param 3 渣人鉴别
 **/
  export type SharingType = 0|1|2|3 

  export type Sharing = {
    userId:string
    id:string
    title:string
    content:string
    type:SharingType
    time:string
    photos?:string[]
  }