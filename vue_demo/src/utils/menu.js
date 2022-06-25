export default {
  menuTree: [{
    code: "0006",
    icon: "ios-add-circle",
    label: "Vue基础",
    parent: "",
    url: "/",
  },
  {
    code: "0001",
    icon: "ios-add-circle",
    label: "iview篇章",
    parent: "",
    url: "/",
  },
  {
    code: "0001-01",
    label: "Table",
    parent: "0001",
    url: "/tableList",
    name: 'tableList'
  },
  {
    code: "0001-02",
    label: "表单动态校验",
    parent: "0001",
    url: "/table/dynamicForm",
    name: 'dynamicForm'
  },
  {
    code: "0001-03",
    label: "日期选择器",
    parent: "0001",
    url: "/table/datepicker",
    name: 'datepicker'
  },
  {
    code: "0001-04",
    label: "文件上传",
    parent: "0001",
    url: "/table/uploadFile",
  },
  {
    code: "0001-05",
    label: "高级表单校验",
    parent: "0001",
    url: "/table/moreForm",
  },
  {
    code: "0001-06",
    label: "treeTable",
    parent: "0001",
    url: "/table/treeTable",
  },
  {
    code: "0001-07",
    label: "tree",
    parent: "0001",
    url: "/table/tree",
  },
  {
    code: "0001-08",
    label: "表单项",
    parent: "0001",
    url: "/table/formPage",
  },
  {
    code: "0002",
    icon: "ios-add-circle",
    label: "预处理器/css",
    parent: "",
    url: "/",
  },
  {
    code: "0002-01",
    icon: "ios-add-circle",
    label: "sass的颜色函数",
    parent: "0002",
    url: "/sassColor",
  },
  {
    code: "0002-02",
    icon: "ios-add-circle",
    label: "TailwindCSS",
    parent: "0002",
    url: "/tailwindCSS",
  },
  {
    code: "0003",
    icon: "ios-add-circle",
    label: "页面布局",
    parent: "",
    url: "/",
  },
  {
    code: "0003-01",
    icon: "ios-add-circle",
    label: "瀑布流布局",
    parent: "0003",
    url: "/layIndex",
  },
  {
    code: "0003-02",
    icon: "ios-add-circle",
    label: "文件导出",
    parent: "0003",
    url: "/exportFile",
  },
  {
    code: "0003-03",
    icon: "ios-add-circle",
    label: "loading动画",
    parent: "0003",
    url: "/loading",
  },
  {
    code: "0003-04",
    icon: "ios-add-circle",
    label: "平行四边形渐变",
    parent: "0003",
    url: "/layout/lineG",
  },
  {
    code: "0004",
    icon: "ios-add-circle",
    label: "自定义组件",
    parent: "",
    url: "/",
  },
  {
    code: "0004-01",
    icon: "ios-add-circle",
    label: "下拉框",
    parent: "0004",
    url: "/custom/dropItem",
  },
  {
    code: "0004-02",
    icon: "ios-add-circle",
    label: "日期组件-主题色",
    parent: "0004",
    url: "/custom/calendar",
  },
  {
    code: "0004-03",
    icon: "ios-add-circle",
    label: "iview二次封装-Page",
    parent: "0004",
    url: "/custom/page",
  },
  {
    code: "0004-04",
    icon: "ios-add-circle",
    label: "iview二次封装-Modal",
    parent: "0004",
    url: "/custom/modal",
  },
  {
    code: "0004-05",
    icon: "ios-add-circle",
    label: "v-drag实现元素拖拽",
    parent: "0004",
    url: "/custom/vDrag",
  },

  {
    code: "0005",
    icon: "ios-add-circle",
    label: "事件优化",
    parent: "",
    url: "/",
  },
  {
    code: "0005-01",
    icon: "ios-add-circle",
    label: "节流和防抖",
    parent: "0005",
    url: "/event/throttle",
  },
  {
    code: "0005-02",
    icon: "ios-add-circle",
    label: "lodash的使用",
    parent: "0005",
    url: "/event/lodash",
  },
  {
    code: "0005-02",
    icon: "ios-add-circle",
    label: "表单自动保存",
    parent: "0005",
    url: "/event/autoSave",
  },
  {
    code: "0006-01",
    icon: "ios-add-circle",
    label: "created与mounted",
    parent: "0006",
    url: "/base/cAndM",
  },
  {
    code: "0006-02",
    icon: "ios-add-circle",
    label: ".sync修饰符",
    parent: "0006",
    url: "/base/sync",
  },
  {
    code: "0006-03",
    icon: "ios-add-circle",
    label: "父组件与子组件执行顺序",
    parent: "0006",
    url: "/base/childAp",
  },
  {
    code: "0006-04",
    icon: "ios-add-circle",
    label: "slot插槽",
    parent: "0006",
    url: "/base/slot",
  },
  {
    code: "0006-05",
    icon: "ios-add-circle",
    label: "混入Mixin",
    parent: "0006",
    url: "/base/mixin",
  },
  {
    code: "0006-06",
    icon: "ios-add-circle",
    label: "路由白名单",
    parent: "0006",
    url: "/base/whiteRouter",
  },
  {
    code: "0006-07",
    icon: "ios-add-circle",
    label: "keep-alive",
    parent: "0006",
    url: "/base/keepAlive",
  },
  {
    code: "0007",
    icon: "ios-add-circle",
    label: "饿了么ui篇章",
    parent: "",
    url: "/",
  },
  {
    code: "0007-01",
    icon: "ios-add-circle",
    label: "二次封装表单",
    parent: "0007",
    url: "/eleUi/reForm",
  },
  {
    code: "0008",
    icon: "ios-add-circle",
    label: "js+",
    parent: "",
    url: "/",
  },
  {
    code: "0008-01",
    icon: "ios-add-circle",
    label: "事件循环机制",
    parent: "0008",
    url: "/js/index",
  },
  {
    code: "0008-02",
    icon: "ios-add-circle",
    label: "闭包",
    parent: "0008",
    url: "/js/closure",
  },
  {
    code: "0008-03",
    icon: "ios-add-circle",
    label: "export怎么定义",
    parent: "0008",
    url: "/js/export",
  },
  {
    code: "0008-04",
    icon: "ios-add-circle",
    label: "常见js函数",
    parent: "0008",
    url: "/js/common",
  },
  {
    code: "0008-05",
    icon: "ios-add-circle",
    label: "链式/NULL判断运算符",
    parent: "0008",
    url: "/js/nullJadge",
  },
  {
    code: "0017",
    icon: "ios-add-circle",
    label: "处理类库",
    parent: "",
    url: "/",
  },
  {
    code: "0017-01",
    icon: "ios-add-circle",
    label: "moment日期处理",
    parent: "0017",
    url: "/library/moment",
  },
  {
    code: "0017-01",
    icon: "ios-add-circle",
    label: "anime.js动画",
    parent: "0017",
    url: "/library/anime",
  },

  {
    code: "0009",
    icon: "ios-add-circle",
    label: "Vue插件/插件",
    parent: "",
    url: "/",
  },
  {
    code: "0009-01",
    icon: "ios-add-circle",
    label: "vuedraggable",
    parent: "0009",
    url: "/plug/vuedraggable",
  },
  {
    code: "0009-02",
    icon: "ios-add-circle",
    label: "awe-dnd",
    parent: "0009",
    url: "/plug/aweDnd",
  },
  {
    code: "0009-03",
    icon: "ios-add-circle",
    label: "quillEditor",
    parent: "0009",
    url: "/plug/quillEditor",
  },
  {
    code: "0009-04",
    icon: "ios-add-circle",
    label: "文件预览Vue-pdf",
    parent: "0009",
    url: "/plug/reviewer",
  },
  {
    code: "0009-05",
    icon: "ios-add-circle",
    label: "excel预览Xsheet",
    parent: "0009",
    url: "/plug/xsheet",
  },
  {
    code: "0009-06",
    icon: "ios-add-circle",
    label: "excel预览luckysheet",
    parent: "0009",
    url: "/plug/luckysheet",
  },
  {
    code: "0009-07",
    icon: "ios-add-circle",
    label: "fullPage",
    parent: "0009",
    url: "/plug/fullPage",
  },
  {
    code: "0010",
    icon: "ios-add-circle",
    label: "数据可视化",
    parent: "",
    url: "/",
  },
  {
    code: "0010-01",
    icon: "ios-add-circle",
    label: "data-V",
    parent: "0010",
    url: "/data/dataV",
  },
  {
    code: "0011",
    icon: "ios-add-circle",
    label: "antV篇章",
    parent: "",
    url: "/",
  },
  {
    code: "0012",
    icon: "ios-add-circle",
    label: "Jest",
    parent: "",
    url: "/",
  },
  {
    code: "0012-01",
    icon: "ios-add-circle",
    label: "Jest",
    parent: "0012",
    url: "/jest/index",
  },
  {
    code: "0012-02",
    icon: "ios-add-circle",
    label: "test01",
    parent: "0012",
    url: "/jest/test01",
  },
  {
    code: "0013",
    icon: "ios-add-circle",
    label: "canvas",
    parent: "",
    url: "/",
  },
  {
    code: "0013-01",
    icon: "ios-add-circle",
    label: "demo-001",
    parent: "0013",
    url: "/canvas/index",
  },
  {
    code: "0013-02",
    icon: "ios-add-circle",
    label: "刮刮卡",
    parent: "0013",
    url: "/canvas/ggk",
  },
  {
    code: "0014",
    icon: "ios-add-circle",
    label: "地图",
    parent: "",
    url: "/",
  },
  {
    code: "0014-01",
    icon: "ios-add-circle",
    label: "高德地图",
    parent: "0014",
    url: "/map/amap",
  },
  {
    code: "0015",
    icon: "ios-add-circle",
    label: "媒体",
    parent: "",
    url: "/",
  },
  {
    code: "0015-01",
    icon: "ios-add-circle",
    label: "DPlayer播放器",
    parent: "0015",
    url: "/media/video",
  },
  {
    code: "0015-02",
    icon: "ios-add-circle",
    label: "vueDplayer",
    parent: "0015",
    url: "/media/vueDplayer",
  },
  {
    code: "0016",
    icon: "ios-add-circle",
    label: "websocket",
    parent: "",
    url: "/",
  },


  ],
};