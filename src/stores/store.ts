/**
 * @Author: 阿祖
 * @Date: 2025-12-02 15:27:37
 * @LastEditors: 阿祖
 * @Description: 通过id获取、设置、删除sessionStorage数据
 */
export class ReasonIdStore<T = any> {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    /** 设置 */
    set(value: T): boolean {
        try {
            sessionStorage.setItem(this.id, JSON.stringify(value));
            return true;
        } catch (err) {
            console.error("ReasonIdStore.set error:", err);
            return false;
        }
    }

    /** 获取 */
    get(): T | null {
        try {
            const raw = sessionStorage.getItem(this.id);
            return raw ? JSON.parse(raw) : null;
        } catch (err) {
            console.error("ReasonIdStore.get error:", err);
            return null;
        }
    }

    /** 删除 */
    remove(): boolean {
        try {
            sessionStorage.removeItem(this.id);
            return true;
        } catch (err) {
            console.error("ReasonIdStore.remove error:", err);
            return false;
        }
    }

    /** 判断是否存在 */
    exist(): boolean {
        return this.get() !== null;
    }

    /** 设置某个 key（仅当 value 是对象时） */
    setByKey(key: string, value: any): boolean {
        try {
            const data: any = this.get() || {};
            data[key] = value;
            return this.set(data);
        } catch (err) {
            console.error("ReasonIdStore.setByKey error:", err);
            return false;
        }
    }

    /** 获取某个 key */
    getByKey<K = any>(key: string): K | undefined {
        const data: any = this.get();
        return data ? data[key] : undefined;
    }

    /** 删除对象内某个 key */
    removeByKey(key: string): boolean {
        try {
            const data: any = this.get() || {};
            delete data[key];
            return this.set(data);
        } catch (err) {
            console.error("ReasonIdStore.removeByKey error:", err);
            return false;
        }
    }
}