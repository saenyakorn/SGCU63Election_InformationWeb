import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const PageContainer = styled.div`
  min-height: 100vh;
`

const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
`

const Content = styled.div`
  height: 100px;
  width: 100px;
`

const Footer = styled.div`
  height: 100px;
  width: 100px;
`

export default function PartyPage({ party }) {
  return (
    <PageContainer>
      <LogoContainer>
        <img alt="" src={party.logo} />
      </LogoContainer>
      <Content>{party.content}</Content>
      <Footer>{party.footer}</Footer>
    </PageContainer>
  )
}
