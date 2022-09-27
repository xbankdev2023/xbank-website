import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import DownloadButton from '../DownloadButton';
import { QRCodeSVG } from 'qrcode.react';
import {
  Highlight,
  AlertDialog,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Button,
  AlertDialogCloseButton,
  Flex,
  Box,
  Text,
  ButtonProps,
} from '@chakra-ui/react';

const ARROW = (
  <svg
    width='32'
    height='16'
    viewBox='0 0 32 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM-8.74228e-08 9L31 9L31 7L8.74228e-08 7L-8.74228e-08 9Z'
      fill='white'
    />
  </svg>
);

const ModalButton: React.FunctionComponent<
  ButtonProps & {
    arrow?: boolean;
  }
> = ({ title, arrow = true, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  const query = useStaticQuery(graphql`
    query {
      modal: file(relativePath: { eq: "modal-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <Button
        borderRadius={40}
        bg='primary'
        onClick={onOpen}
        _hover={{
          opacity: 0.7,
        }}
        _focus={{
          opacity: 0.7,
        }}
        _active={{
          opacity: 0.7,
        }}
        {...rest}
      >
        {title}&nbsp;
        {arrow && ARROW}
      </Button>

      <AlertDialog
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay bgColor='blackAlpha.800'>
          <AlertDialogContent
            maxW={{
              xs: 345,
              sm: 345,
              md: 530,
            }}
          >
            <AlertDialogHeader
              fontSize={24}
              fontWeight={700}
              color='font.primary'
            >
              Find the Hottest Web3 Services in xBank
            </AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody>
              <Flex pb={8} gap={4}>
                <Box>
                  <GatsbyImage
                    loading='lazy'
                    image={query.modal?.childImageSharp?.gatsbyImageData}
                    alt=''
                    title=''
                    style={{ width: 167 }}
                  />
                </Box>
                <Box>
                  <Text fontSize={14} fontWeight={700}>
                    <Highlight
                      query={'5 USDT + 500 BUSD'}
                      styles={{
                        color: 'primary',
                      }}
                    >
                      Follow us & Grab a 5 USDT + 500 BUSD Registration Reward
                    </Highlight>
                  </Text>
                  <Flex alignItems={'center'} mt={4}>
                    {/* 按钮 */}
                    <Box mr={6}>
                      <Box onClick={() => console.log('打开 app store')}>
                        <DownloadButton dType='ios' bg='#000000' w={120} />
                      </Box>
                      <Box
                        mt={2}
                        onClick={() => console.log('打开 google play')}
                      >
                        <DownloadButton dType='android' bg='#000000' w={120} />
                      </Box>
                    </Box>
                    {/* <ScaleFade initialScale={0.9} in={!!showIndex}> */}
                    <Box
                      boxShadow={'gray 0px 0px 5px'}
                      w={75}
                      h={75}
                      borderRadius={10}
                    >
                      <QRCodeSVG
                        value={`${window.location.host}/download`}
                        width={75}
                        height={75}
                        includeMargin
                      />
                    </Box>
                    {/* </ScaleFade> */}
                  </Flex>
                </Box>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ModalButton;
