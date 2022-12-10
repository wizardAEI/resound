/*
 * @Date: 2022-11-29 22:59:34
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2022-12-10 11:45:57
 * @FilePath: \resound\src\main.tsx
 * @description:
 */
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { systemTheme } from "./utils/systemConfig";
import Home from "./view/home/home";
// 路由配置
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './style.css'
import { Detail } from "./view/detail/detail";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={systemTheme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
