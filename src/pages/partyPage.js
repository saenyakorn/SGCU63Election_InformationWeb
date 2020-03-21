import React from "react"
import { Link } from "react-router-dom"
import styled, { ThemeContext } from "styled-components"
import { useTranslation } from "react-i18next"

// STYLED COMPONENTS
const PageBackground = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ background }) => background || "#ffffff"};
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const PageContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
`

const Header = styled.h6`
  height: auto;
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  padding: 0.5em 1em;
  margin-top: 1em;
  background: ${({ background }) => background || "#ffffff"};
  color: ${({ color }) => color || "#ffffff"};
  text-decoration: underline;
`
const Button = styled(Header)`
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin-top: ${({ marginTop }) => marginTop || "auto"};
  & > * {
    color: ${({ color }) => color || "#ffffff"};
  }
`

const ButtonBack = styled(Header)`
  text-align: left;
  margin-top: 0;
  background: #f18ea2;
  & > * {
    color: ${({ color }) => color || "#ffffff"};
  }
`

const LogoContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 2em 0;
`

const ParagraphContainer = styled.div`
  padding: 1em;
  border: 1px solid white;
  display: grid
`

const Title = styled.div`
  font-family: "TH Sarabun New";
  font-size: 1em;
  margin-bottom: 1em;
  font-weight: bold;
  text-align: center;
`

const Paragraph = styled.div`
  font-family: "TH Sarabun New";
  font-size: 0.9em;
  margin: auto;
  margin-bottom: 0.5em;
`

const Paragraph2 = styled.div`
  font-family: "TH Sarabun New";
  font-size: 0.8em;
  margin: auto;
  margin-bottom: 1em;
`

const Subparagraph = styled.div`
  font-family: "TH Sarabun New";
  font-size: 0.9em;
`

const Contact = styled.div`
  font-family: "TH Sarabun New";
  font-size: 0.9em;
  margin: 1em 0;
`

const ContactLink = styled.div`
  font-family: "TH Sarabun New";
  font-size: 0.9em;
  color: white;
  & > * {
    color: white;
  }
`
export default function PartyPage({ party }) {
  const { t } = useTranslation()
  const themeContext = React.useContext(ThemeContext)

  return (
    <PageBackground background={themeContext.colors[party].background}>
      <ButtonBack color={"white"}>
        <Link to="/">Back</Link>
      </ButtonBack>
      <Header background={themeContext.colors[party].secondary} color={themeContext.colors[party].primary}>
        {t(`${party}.header`)}
      </Header>
      <PageContainer>
        <LogoContainer>
          <img alt="" src={require(`../images/Logo_${party}.png`)} />
        </LogoContainer>
        <ParagraphContainer>
          <Title>{t(`${party}.title`)}</Title>
          {/* <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_1st`)}</Paragraph> */}

          {party === "party2" ? <Paragraph>{t(`${party}.paragraph_1st`).split("\n").map((i, key) => {
            return <Subparagraph key={key}> {i} </Subparagraph>; }) } </Paragraph> 
            : <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_1st`)}</Paragraph>}

          {/* <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_2nd`)}</Paragraph> */}

          {party === "party2" ? <Paragraph2>{t(`${party}.paragraph_2nd`).split("\n").map((i, key) => {
            return <Subparagraph key={key}> {i} </Subparagraph>; }) } </Paragraph2>
            : <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_2nd`)}</Paragraph>}
          
          {/* {party === "party2" ? <Contact>{t(`${party}.paragraph_3rd`)}</Contact> : ""} */}
          <Contact>{t(`${party}.paragraph_3rd`)}</Contact> 

          <Contact>{t(`${party}.facebook`)}</Contact>
          {party === "party2" ? (
            <ContactLink>
              <a href={t(`${party}.facebookLink`)}>{t(`${party}.facebookLink`)}</a>
            </ContactLink>
          ) : (
            ""
          )}
          <Contact>{t(`${party}.instragram`)}</Contact>
          {party === "party2" ? (
            <ContactLink>
              <a href={t(`${party}.instragramLink`)}>{t(`${party}.instragramLink`)}</a>
            </ContactLink>
          ) : (
            ""
          )}
          <Contact>{t(`${party}.twitter`)}</Contact>
        </ParagraphContainer>
      </PageContainer>

      <Button background={"#f18ea2"} color={"white"}>
        <a href={t(`${party}.facebookLink`)}>{t(`${party}.facebook`)}</a>
      </Button>
    </PageBackground>
  )
}
