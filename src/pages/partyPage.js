import React from "react"
import styled, { ThemeContext } from "styled-components"
import { useTranslation } from "react-i18next"

const PageBackground = styled.div`
  background: ${({ background }) => background || "#ffffff"};
  padding-top: 1em;
  color: #ffffff;
`

const PageContainer = styled.div`
  min-height: 100vh;
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h6`
  height: auto;
  font-size: 1.5em;
  text-align: center;
`

export default function PartyPage({ party }) {
  const { t } = useTranslation()
  const themeContext = React.useContext(ThemeContext)

  return (
    <PageBackground background={themeContext.colors[party].background}>
      <Header>{t(`${party}.header`)}</Header>
      <PageContainer></PageContainer>
    </PageBackground>
  )
}
