import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"


//https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;



const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const ContentP = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <Title>{`${db.title}`}</Title>
          </Widget.Header>
          <Widget.Content>
            <ContentP>{`${db.description}`}</ContentP>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <Title>Teste seus conhecimentos!</Title>
          </Widget.Header>
          <Widget.Content>
            <ContentP>{`${db.description}`}</ContentP>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ocariocawebdesign/aluraquiz-base"/>
    </QuizBackground>
  );
}
