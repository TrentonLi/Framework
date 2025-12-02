declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@/*'

declare type x = any
declare type s = string
declare type n = number
declare type nil = null
declare type b = boolean
declare type undef = undefined
declare type f<T = void> = (args?: x) => T
declare type eventFun<T = MouseEvent> = (e: T) => void
declare type opt<T = x> = Array<T & { label: x; value: x }>

declare type vo = void
declare type str = string
declare type num = number
declare type bool = boolean
declare type fun<T = void> = (args?: x) => T