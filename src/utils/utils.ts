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