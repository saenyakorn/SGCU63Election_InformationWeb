import React from "react"
import { Link } from "react-router-dom"
import styled, { ThemeContext } from "styled-components"
import { useTranslation } from "react-i18next"

// STYLED COMPONENTS
const PageBackground = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ background }) => background || "#ffffff"};
  padding-top: 1em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  width: 85vw;
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
  background: ${({ background }) => background || "#ffffff"};
  color: ${({ color }) => color || "#ffffff"};
  text-decoration: underline;
`
const Button = styled(Header)`
  margin-top: auto;
  & > * {
    color: ${({ color }) => color || "#ffffff"};
  }
`

const LogoContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 2em 0;
`

const ParagraphCantainer = styled.div`
  padding: 1em;
  border: 1px solid white;
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
  margin: 1em 0;
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
      <Header background={themeContext.colors[party].secondary} color={themeContext.colors[party].primary}>
        {t(`${party}.header`)}
      </Header>
      <PageContainer>
        <LogoContainer>
          <img alt="" src={require(`../images/Logo_${party}.png`)} />
        </LogoContainer>
        <ParagraphCantainer>
          <Title>{t(`${party}.title`)}</Title>
          <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_1st`)}</Paragraph>
          <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_2nd`)}</Paragraph>
          {party === "party2" ? <Paragraph>&nbsp;&nbsp;&nbsp;{t(`${party}.paragraph_3rd`)}</Paragraph> : ""}
          <Contact>{t(`${party}.facebook`)}</Contact>
          {party === "party2" ? (
            <ContactLink>
              <a href={"https://" + t(`${party}.facebookLink`)}>{t(`${party}.facebookLink`)}</a>
            </ContactLink>
          ) : (
            ""
          )}
          <Contact>{t(`${party}.instragram`)}</Contact>
          {party === "party2" ? (
            <ContactLink>
              <a href={"https://" + t(`${party}.instragramLink`)}>{t(`${party}.instragramLink`)}</a>
            </ContactLink>
          ) : (
            ""
          )}
          <Contact>{t(`${party}.twitter`)}</Contact>
        </ParagraphCantainer>
      </PageContainer>

      <Button background={themeContext.colors[party].secondary} color={themeContext.colors[party].primary}>
        <Link to="/">BACK</Link>
      </Button>
    </PageBackground>
  )
}
