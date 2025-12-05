//登陆
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
//用户
interface UserState {
    username: string;
    token: string;
}
//菜单
interface MenuItem {
    key: string
    label: string
    icon?: any
    children?: MenuItem[]
}

interface TabItem {
    title: string
    path: string
    closable?: boolean
}


export type {
    FormState,
    UserState,
    MenuItem,
    TabItem
};