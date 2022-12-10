import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { systemTheme } from "../../utils/systemConfig";

/*
 * @Date: 2022-12-10 11:26:02
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2022-12-10 12:21:09
 * @FilePath: \resound\src\view\detail\detail.tsx
 * @description:
 */
const title = "不要说开始做，要说正在做。";
const detail = `
当做好了计划，有了想法之后，不要说开始做，而要说正在做。
学习和工作的时间，不要让自己打扰，无论是来自外界还是内心的想法。一件事，确定好做完，那么在做完之前，不要刷手机，不要犒劳自己，不要中断思维。
`;

// CSS
const theme = systemTheme.night;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bac};
  color: ${theme.font.color};
`;
const Title = styled.div`
  margin-top: 32px;
  padding: 10px;
  display: flex;
  font-size: ${theme.font.titleSize};
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  padding: 8px;
  flex: 1;
  overflow: auto;
  white-space: pre-wrap;
`;
const Back = styled.div`
  cursor: pointer;
  position: fixed;
  top: 8px;
  left: 8px;
  transition: 0.3s;
  &:hover {
    color: ${theme.font.activeColor};
  }
`;

export function Detail() {
  const nav = useNavigate();
  return (
    <Container>
      <Back onClick={() => nav("/")}>返回</Back>
      <Title>
        <span>{title}</span>
      </Title>
      <Body>
        <span>{detail}</span>
      </Body>
    </Container>
  );
}
