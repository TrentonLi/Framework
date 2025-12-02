import {reactive} from "vue";
import type {MenuItem} from "../utils/interface.ts";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons-vue";

export const MenuList = reactive<MenuItem[]>([
    {
        key: "home",
        label: "首页",
        icon: UserOutlined,
    },
    {
        key: "user",
        label: "User",
        icon: VideoCameraOutlined,
        children: [
            { key: "userOne", label: "Tom" },
            { key: "userTwo", label: "Bill" },
            { key: "userThree", label: "Alex" },
        ],
    },
    {
        key: "3",
        label: "nav 3",
        icon: UploadOutlined,
    },
])