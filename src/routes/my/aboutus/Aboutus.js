import React, { Component } from "react";
import { WhiteSpace, WingBlank } from "antd-mobile";
class Aboutus extends Component {
    render() {
        const styles = {
            backgroundColor: '#fff',
            padding: '15px 10px',
            fontSize: '16px'
        }
        return (
            <WingBlank>
                <WhiteSpace />
                <div style={styles}>
                    保定市爱畜牧农牧服务有限公司是一家科技创新型公司， 以为畜牧业提供综合服务为目标， 依托河北农业大学动物医院的有利资源， 可为用户提供农业技术、 生物技术、 畜牧技术的咨询服务， 同时销售饲料、 兽用药品、 动物保健用品、 牧场设备等相关产品。
                    公司现有员工均为大专以上学历， 已经为河北省及周边超过600家用户提供产品和服务。 公司将以开放、 合作、 共赢的服务理念， 继续为祖国畜牧业的健康发展贡献力量！
                    河北农业大学动物医院动物疫病监测中心具有国内一流的监测诊断设备， 由动物传染病学、 动物病理学、 兽医药理学等专业著名专家、 教授共同组建的专业技术团队， 开展各种畜禽疾病监测和技术培训服务， 具体内容包括：
                    1、 猪、 禽、 牛、 羊、 毛皮动物、 兔等疫病及疑难病的诊断、 检测与鉴定；
                    2、 猪、 禽、 牛、 羊、 毛皮动物、 兔等动物使用疫苗后的抗体检测及抗体水平动态变化的监测；
                    3、 帮助养殖企业（ 户） 制订科学有效的疫病防治计划和净化方案；
                    4、 提供技术咨询、 出诊服务及技术培训；
                    5、 为养殖企业兽医人员提供实验室操作技能培训与实践；
                    6、 为养殖场提供贴身式兽医服务。
                </div>
            </WingBlank>
        )
    }
}

export default Aboutus;