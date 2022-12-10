/*
 * @Date: 2022-12-06 12:24:17
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2022-12-10 11:54:49
 * @FilePath: \resound\src\utils\systemConfig.ts
 * @description: 
 */
import { type } from "os";

export const systemTheme = {
    val: "night",
    main: {
        bac: '#ffffff',
        font: {
            color: '#000'
        }
    },
    night: {
        bac: 'rgb(35, 39, 46)',
        font: {
            color: 'rgb(187, 198, 210)',
            activeColor: '#eeeeee',
            titleSize: '18px',
            bodySize: '16px'
        },
        bacActive: ''
    }
};
export type systemThemeType =  Omit<typeof systemTheme, 'val'> & {
    val: 'main' | 'night'
}