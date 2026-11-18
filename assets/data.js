/* ============================================================
   法规信息内容数据文件  /  Regulatory information content
   ------------------------------------------------------------
   如何更新：直接修改下面每个产品对象里 "..." 的文字即可，
   保存后重新上传本文件即可生效。二维码无需改动。
   To update: just edit the text values in each product object below,
   then re-upload this file. The QR codes never need to change.
   ============================================================ */

const SITE = {
  brand: "PENGCHEN 鹏辰能源",
  brandSub: "Legal & Compliance Information",
  footerNote: "本页面信息由制造商提供，如有更新以本页为准。/ Information provided by the manufacturer; this page prevails when updated.",
  lastReview: "待补充 / TBC"
};

// 四个产品。url 字段用于内部标注对应哪个二维码，不参与页面渲染。
const PRODUCTS = {
  "P1": {
    url: "（产品 1 的固定网址，部署后填写）",
    model: "产品型号 1 / Model 1",
    name: "产品名称待补充 / Product name TBC",
    sku: "待补充 / TBC",
    status: "information-pending",
    battery: {
      chemistry: "待补充 / TBC",
      nominalVoltage: "待补充 / TBC",
      capacity: "待补充 / TBC",
      cellCount: "待补充 / TBC",
      manufacturer: "待补充 / TBC",
      productionDate: "待补充 / TBC",
      batch: "待补充 / TBC"
    },
    compliance: [
      { label: "CE 符合性声明 / EU Declaration of Conformity", value: "待上传 / To be uploaded" },
      { label: "RoHS 指令 2011/65/EU", value: "待上传 / To be uploaded" },
      { label: "REACH 法规 (EC) 1907/2006", value: "待上传 / To be uploaded" },
      { label: "WEEE 指令 2012/19/EU", value: "待上传 / To be uploaded" },
      { label: "电池法规 (EU) 2023/1542", value: "待上传 / To be uploaded" },
      { label: "UN38.3 运输测试报告", value: "待上传 / To be uploaded" }
    ],
    documents: [],
    safety: [
      "Do not disassemble or reassemble.",
      "Do not dispose of in fire or directly short circuit.",
      "请使用符合要求的充电器，避免过充、过放。/ Use a compliant charger; avoid over-charging and over-discharging.",
      "避免撞击、穿刺及高温环境。/ Avoid impact, puncture and high temperature."
    ],
    manufacturer: {
      name: "Dongguan Pengchen Energy Technology Co., Ltd.",
      address: "Room 1502, Bldg 1, Industry Tower, Lite Zing Sq06-01, Innovation City, No.55 Tugang East Rd, Qingxi, Dongguan, Guangdong, China",
      contact: "待补充 / TBC"
    },
    disposal: "请根据当地法规回收处理本产品及电池。/ Please recycle this product and its battery in accordance with local regulations."
  },

  "P2": {
    url: "（产品 2 的固定网址，部署后填写）",
    model: "产品型号 2 / Model 2",
    name: "产品名称待补充 / Product name TBC",
    sku: "待补充 / TBC",
    status: "information-pending",
    battery: {
      chemistry: "待补充 / TBC",
      nominalVoltage: "待补充 / TBC",
      capacity: "待补充 / TBC",
      cellCount: "待补充 / TBC",
      manufacturer: "待补充 / TBC",
      productionDate: "待补充 / TBC",
      batch: "待补充 / TBC"
    },
    compliance: [
      { label: "CE 符合性声明 / EU Declaration of Conformity", value: "待上传 / To be uploaded" },
      { label: "RoHS 指令 2011/65/EU", value: "待上传 / To be uploaded" },
      { label: "REACH 法规 (EC) 1907/2006", value: "待上传 / To be uploaded" },
      { label: "WEEE 指令 2012/19/EU", value: "待上传 / To be uploaded" },
      { label: "电池法规 (EU) 2023/1542", value: "待上传 / To be uploaded" },
      { label: "UN38.3 运输测试报告", value: "待上传 / To be uploaded" }
    ],
    documents: [],
    safety: [
      "Do not disassemble or reassemble.",
      "Do not dispose of in fire or directly short circuit.",
      "请使用符合要求的充电器，避免过充、过放。/ Use a compliant charger; avoid over-charging and over-discharging.",
      "避免撞击、穿刺及高温环境。/ Avoid impact, puncture and high temperature."
    ],
    manufacturer: {
      name: "Dongguan Pengchen Energy Technology Co., Ltd.",
      address: "Room 1502, Bldg 1, Industry Tower, Lite Zing Sq06-01, Innovation City, No.55 Tugang East Rd, Qingxi, Dongguan, Guangdong, China",
      contact: "待补充 / TBC"
    },
    disposal: "请根据当地法规回收处理本产品及电池。/ Please recycle this product and its battery in accordance with local regulations."
  },

  "P3": {
    url: "（产品 3 的固定网址，部署后填写）",
    model: "产品型号 3 / Model 3",
    name: "产品名称待补充 / Product name TBC",
    sku: "待补充 / TBC",
    status: "information-pending",
    battery: {
      chemistry: "待补充 / TBC",
      nominalVoltage: "待补充 / TBC",
      capacity: "待补充 / TBC",
      cellCount: "待补充 / TBC",
      manufacturer: "待补充 / TBC",
      productionDate: "待补充 / TBC",
      batch: "待补充 / TBC"
    },
    compliance: [
      { label: "CE 符合性声明 / EU Declaration of Conformity", value: "待上传 / To be uploaded" },
      { label: "RoHS 指令 2011/65/EU", value: "待上传 / To be uploaded" },
      { label: "REACH 法规 (EC) 1907/2006", value: "待上传 / To be uploaded" },
      { label: "WEEE 指令 2012/19/EU", value: "待上传 / To be uploaded" },
      { label: "电池法规 (EU) 2023/1542", value: "待上传 / To be uploaded" },
      { label: "UN38.3 运输测试报告", value: "待上传 / To be uploaded" }
    ],
    documents: [],
    safety: [
      "Do not disassemble or reassemble.",
      "Do not dispose of in fire or directly short circuit.",
      "请使用符合要求的充电器，避免过充、过放。/ Use a compliant charger; avoid over-charging and over-discharging.",
      "避免撞击、穿刺及高温环境。/ Avoid impact, puncture and high temperature."
    ],
    manufacturer: {
      name: "Dongguan Pengchen Energy Technology Co., Ltd.",
      address: "Room 1502, Bldg 1, Industry Tower, Lite Zing Sq06-01, Innovation City, No.55 Tugang East Rd, Qingxi, Dongguan, Guangdong, China",
      contact: "待补充 / TBC"
    },
    disposal: "请根据当地法规回收处理本产品及电池。/ Please recycle this product and its battery in accordance with local regulations."
  },

  "P4": {
    url: "（产品 4 的固定网址，部署后填写）",
    model: "产品型号 4 / Model 4",
    name: "产品名称待补充 / Product name TBC",
    sku: "待补充 / TBC",
    status: "information-pending",
    battery: {
      chemistry: "待补充 / TBC",
      nominalVoltage: "待补充 / TBC",
      capacity: "待补充 / TBC",
      cellCount: "待补充 / TBC",
      manufacturer: "待补充 / TBC",
      productionDate: "待补充 / TBC",
      batch: "待补充 / TBC"
    },
    compliance: [
      { label: "CE 符合性声明 / EU Declaration of Conformity", value: "待上传 / To be uploaded" },
      { label: "RoHS 指令 2011/65/EU", value: "待上传 / To be uploaded" },
      { label: "REACH 法规 (EC) 1907/2006", value: "待上传 / To be uploaded" },
      { label: "WEEE 指令 2012/19/EU", value: "待上传 / To be uploaded" },
      { label: "电池法规 (EU) 2023/1542", value: "待上传 / To be uploaded" },
      { label: "UN38.3 运输测试报告", value: "待上传 / To be uploaded" }
    ],
    documents: [],
    safety: [
      "Do not disassemble or reassemble.",
      "Do not dispose of in fire or directly short circuit.",
      "请使用符合要求的充电器，避免过充、过放。/ Use a compliant charger; avoid over-charging and over-discharging.",
      "避免撞击、穿刺及高温环境。/ Avoid impact, puncture and high temperature."
    ],
    manufacturer: {
      name: "Dongguan Pengchen Energy Technology Co., Ltd.",
      address: "Room 1502, Bldg 1, Industry Tower, Lite Zing Sq06-01, Innovation City, No.55 Tugang East Rd, Qingxi, Dongguan, Guangdong, China",
      contact: "待补充 / TBC"
    },
    disposal: "请根据当地法规回收处理本产品及电池。/ Please recycle this product and its battery in accordance with local regulations."
  }
};
