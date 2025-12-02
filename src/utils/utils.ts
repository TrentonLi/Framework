import {ref, type Ref, type UnwrapRef} from "vue";


//随机生成20位token
export const generateToken = (length = 20) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, x => chars[x % chars.length]).join('');
}

/**
 * @Author: 阿祖
 * @Date: 2025-12-01 16:11:12
 * @LastEditors: 阿祖
 * @Description: 通用提示方法
 * @param code S/F/W/E/I,默认I(info)
 * @param message 提示信息
 */
import {message as AMessage} from 'ant-design-vue';

const msgMap = {
    S: 'success',
    W: 'warning',
    E: 'error',
    I: 'info'
} as const;
type MsgCode = keyof typeof msgMap;

export const toast = (code: MsgCode = 'I', info: string) => {
    const method = msgMap[code];
    AMessage[method](info);
};

/**
 * 自定义useState hook，用于创建响应式状态
 * @param initial 初始状态值
 * @returns 包含状态引用和状态更新函数的元组
 */
export type UseStateSetMethod<T> = (
    value: UnwrapRef<T>,
    cb?: (val: UnwrapRef<T>) => void
) => void;

export function useState<T>(initial: T): [ Ref<UnwrapRef<T>>, UseStateSetMethod<T> ] {
    const state = ref(initial) as Ref<UnwrapRef<T>>;

    const setState: UseStateSetMethod<T> = (value, cb) => {
        state.value = value as UnwrapRef<T>;
        cb?.(state.value);
    };

    return [ state, setState ];
}
