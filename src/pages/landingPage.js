import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

// LOGO image
import footer from "../images/footer.png"
import Logo_party1 from "../images/Logo_party1.png"
import Logo_party2 from "../images/Logo_party2.png"

const PageContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageBackground = styled.div`
  min-height: 100vh;
  background: #efe7ee;
`

const LogoContainer = styled.div`
  height: 120px;
  width: 120px;
`

const Header = styled.div`
  margin-top: 5vh;
  text-align: center;
`

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
  text-align: center;
`

const PartyLinked = styled.div`
  margin-top: 1em;
  padding: 0.3em 0.7em;
  background: ${({ background }) => background || "#000000"};
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.9);
  & > * {
    color: #ffffff;
    text-decoration: none;
  }
`

const Detail = styled.div`
  margin: 2.2em 0 1.2em 0;
  text-align: center;
`

const Footer = styled.div`
  width: 100vw;
  margin-top: 1em;
`

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <PageBackground>
      <PageContainer>
        <Header>{t("landing.header")}</Header>
        <Layout>
          <LogoContainer>
            <img alt="" src={Logo_party1} />
          </LogoContainer>
          <PartyLinked background="#272b5f">
            <Link to="/number1">{t("landing.party1_name")}</Link>
          </PartyLinked>
        </Layout>
        <Layout>
          <LogoContainer>
            <img alt="" src={Logo_party2} />
          </LogoContainer>
          <PartyLinked background="#b25034">
            <Link to="/number2">{t("landing.party2_name")}</Link>
          </PartyLinked>
        </Layout>
        <Detail>{t("landing.detail")}</Detail>
      </PageContainer>
      <Footer>
        <img alt="" src={footer} />
      </Footer>
    </PageBackground>
  )
}
