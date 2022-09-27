import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Box } from '@chakra-ui/react';
// import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import Header from '../components/Header';
import Content1 from '../components/Content1';
import WhyChoose from '../components/WhyChoose';
import Team from '../components/Team';
import Community from '../components/Community';
import DownloadApp from '../components/DownloadApp';
import '../style/global.scss';
import SafeCrypto from '../components/SafeCrypto';
import Footer from '../components/Footer';
import Backed from '../components/Backed';
import Featured from '../components/Featured';
import Utilities from '../components/Utilities';
import Pay from '../components/Pay';
import {
  ABOUT_US_ID,
  COMMUNITY_ID,
  CONVERT_MONEY_ID,
  DISCOVER_WEB3_ID,
} from '../constants/ID';

const IndexPage = () => {
  // const { t, changeLanguage } = useI18next();
  const { innerHeight } = window;
  return (
    <Box>
      <Header />

      <Content1 />
      <WhyChoose />
      <Box id={DISCOVER_WEB3_ID}>
        <Utilities />
      </Box>
      <Box id={CONVERT_MONEY_ID}>
        <Pay />
      </Box>

      <SafeCrypto />
      <Backed />
      <Featured />
      <Box id={ABOUT_US_ID}>
        <Team />
      </Box>
      <Box id={COMMUNITY_ID}>
        <Community />
      </Box>
      <DownloadApp />

      <Footer />
    </Box>
  );
};

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
