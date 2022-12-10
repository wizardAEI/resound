/*
 * @Date: 2022-11-29 23:20:47
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2022-12-10 12:21:35
 * @FilePath: \resound\src\view\home\home.tsx
 * @description:
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { systemTheme, systemThemeType } from "../../utils/systemConfig";

// CSS
const theme = systemTheme.night
const Container = styled.div`
  color: ${theme.font.color};
  background-color: ${theme.bac};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Banner = styled.div`
  padding: 22px 12px 12px 12px;
  font-size: ${theme.font.titleSize};
  height: 30vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  > span:first-child {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .5s;
  }
  > span:first-child:hover {
    color: ${theme.font.activeColor};
  }
  > span:last-child {
    flex: 1;
    font-size: ${theme.font.bodySize};
    width: 100%;
    text-align: end;
  }
`
const inputStyle = `
  background: #9a959512;
  color: ${theme.font.color};
  padding: 12px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  > div:nth-child(1) {
    > textarea {
      text-align: center;
      resize: vertical;
      width: 100%;
      height: 48px;
      border-width: 0 0 1.5px 0;
      border-bottom-style: dashed;
      font-size: ${theme.font.titleSize};
      ${inputStyle}
    }
    > textarea:focus-visible {
      outline: 0;
      white-space: pre-wrap;
      ${inputStyle}
    }
  }
  > div:nth-child(2) {
    flex: 1;
    width: 100%;
    > textarea {
      width: 100%;
      height: 100%;
      resize: none;
      font-size: ${theme.font.bodySize};
      ${inputStyle}
      color: ${theme.font.color};
      border: 0;
    }
    > textarea:focus-visible {
      outline: 0;
    }
  }
  > div:last-child {
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: .3s;
  }
  > div:last-child:hover {
    color: ${theme.font.activeColor};
    background-color: #ffffff20;
  }
`

export default function Home() {
  // JS
  useEffect(() => {
  }, [])
  const nav = useNavigate()

  const title = '不要说开始做，要说正在做。'
  const time = '22年12月10日'

  const [data, setData] = useState({
    title: '',
    body: ''
  })
  const writeTitle = (e: any) => {
    if(e.target.value.length > 50) return
    setData({
      title: e.target.value,
      body: data.body
    })
  }
  const writeBody = (e: any) => {
    setData({
      title: data.title,
      body: e.target.value
    })
  }

  // HTML
  return (
      <Container>
        <Banner onClick={() => nav('/detail')}>
          <span>{title}</span>
          <span>—— {time}</span>
        </Banner>     
        <Main>
          <div className="main-title">
            <textarea value={data.title} onChange={writeTitle}/>
          </div>
          <div className="main-body">
            <textarea value={data.body} onChange={writeBody} placeholder="更多想法..." />
          </div>
          <div className="main-record">
            记录
          </div>
        </Main>
      </Container>
  );
}
