import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TH Sarabun New';
    src: url('../fonts/THSarabunNew/THSarabunNew.eot');
    src: local('THSarabunNew'),
        url('../fonts/THSarabunNew/THSarabunNew.eot?#iefix') format('embedded-opentype'),
        url('../fonts/THSarabunNew/THSarabunNew.woff2') format('woff2'),
        url('../fonts/THSarabunNew/THSarabunNew.woff') format('woff'),
        url('../fonts/THSarabunNew/THSarabunNew.ttf') format('truetype'),
        url('../fonts/THSarabunNew/THSarabunNew.svg#THSarabunNew') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'TH Sarabun New';
      src: url('../fonts/THSarabunNew/THSarabunNew-Bold.eot');
      src: local('THSarabunNew-Bold'),
          url('../fonts/THSarabunNew/THSarabunNew-Bold.eot?#iefix') format('embedded-opentype'),
          url('../fonts/THSarabunNew/THSarabunNew-Bold.woff2') format('woff2'),
          url('../fonts/THSarabunNew/THSarabunNew-Bold.woff') format('woff'),
          url('../fonts/THSarabunNew/THSarabunNew-Bold.ttf') format('truetype'),
          url('../fonts/THSarabunNew/THSarabunNew-Bold.svg#THSarabunNew-Bold') format('svg');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'TH Sarabun New';
      src: url('../fonts/THSarabunNew/THSarabunNew-Italic.eot');
      src: local('THSarabunNew-Italic'),
          url('../fonts/THSarabunNew/THSarabunNew-Italic.eot?#iefix') format('embedded-opentype'),
          url('../fonts/THSarabunNew/THSarabunNew-Italic.woff2') format('woff2'),
          url('../fonts/THSarabunNew/THSarabunNew-Italic.woff') format('woff'),
          url('../fonts/THSarabunNew/THSarabunNew-Italic.ttf') format('truetype'),
          url('../fonts/THSarabunNew/THSarabunNew-Italic.svg#THSarabunNew-Italic') format('svg');
      font-weight: normal;
      font-style: italic;
  }

  @font-face {
      font-family: 'TH Sarabun New';
      src: url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.eot');
      src: local('THSarabunNew-BoldItalic'),
          url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.woff2') format('woff2'),
          url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.woff') format('woff'),
          url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.ttf') format('truetype'),
          url('../fonts/THSarabunNew/THSarabunNew-BoldItalic.svg#THSarabunNew-BoldItalic') format('svg');
      font-weight: bold;
      font-style: italic;
  }

  @font-face {
      font-family: 'CHULALONGKORN';
      src: url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.eot');
      src: local('CHULALONGKORN Bold'), local('CHULALONGKORN-Bold'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.eot?#iefix') format('embedded-opentype'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.woff2') format('woff2'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.woff') format('woff'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.ttf') format('truetype'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Bold.svg#CHULALONGKORN-Bold') format('svg');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'CHULALONGKORN';
      src: url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.eot');
      src: local('CHULALONGKORN Regular'), local('CHULALONGKORN-Regular'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.eot?#iefix') format('embedded-opentype'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.woff2') format('woff2'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.woff') format('woff'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.ttf') format('truetype'),
          url('../fonts/CHULALONGKORN/CHULALONGKORN-Regular.svg#CHULALONGKORN-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  * {
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: CHULALONGKORN;
      font-weight: normal;
      font-size: 16px;
      @media screen and (min-width: 992px) {
        font-size: 24px;
    }
  }
`

export default GlobalStyle
