import {reactive} from "vue";
import type {MenuItem} from "../utils/interface.ts";
import {UserOutlined, VideoCameraOutlined, UnorderedListOutlined} from "@ant-design/icons-vue";

export const MenuList = reactive<MenuItem[]>([
    {
        key: "home",
        label: "首页",
        icon: UserOutlined,
    },
    {
        key: "baseTable",
        label: "基础表格",
        icon: UnorderedListOutlined,
    },
    {
        key: "stack",
        label: "技术栈",
        icon: VideoCameraOutlined,
        children: [
            {key: "vue", label: "VUE3"},
            {key: "pinia", label: "Pinia"},
            {key: "ant_design_vue", label: "Ant Design Vue"},
            {key: "tail_wind", label: "tailWind Css"},
        ],
    },
    //{
    //    key: "3",
    //    label: "nav 3",
    //    icon: UploadOutlined,
    //},
])