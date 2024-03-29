import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { DIVIDE } from '../../constants/paddingY';
import Title from '../Title';
import Slider from 'react-slick';
import { handleNavigate } from '../../utils/navigate';
import f1 from '../../images/featured/1.png';
import f2 from '../../images/featured/2.png';
import f3 from '../../images/featured/3.png';
import f4 from '../../images/featured/4.png';
import f5 from '../../images/featured/5.png';
import f6 from '../../images/featured/6.png';

const TEST_ICON = (
  <svg
    width='115'
    height='21'
    viewBox='0 0 115 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M23.1632 5.7236C18.9939 5.7236 15.7363 8.88857 15.7363 13.1255C15.7363 17.3625 18.9116 20.5003 23.1632 20.5003C27.4147 20.5003 30.6453 17.3083 30.6453 13.0984C30.6453 8.91564 27.4699 5.7236 23.1632 5.7236ZM23.1913 17.4469C20.8171 17.4469 19.0772 15.6029 19.0772 13.1266C19.0772 10.6221 20.7889 8.77918 23.1632 8.77918C25.5655 8.77918 27.3043 10.6502 27.3043 13.1266C27.3043 15.6029 25.5655 17.4469 23.1913 17.4469ZM31.5558 8.94376H33.6268V20.2264H36.9397V5.99864H31.5558V8.94376ZM7.39879 8.77812C9.13859 8.77812 10.5189 9.85118 11.043 11.4472H14.5496C13.9142 8.03533 11.0982 5.7236 7.42692 5.7236C3.25767 5.7236 0 8.88857 0 13.1266C0 17.3646 3.17538 20.5014 7.42692 20.5014C11.0159 20.5014 13.8871 18.1897 14.5225 14.7497H11.043C10.546 16.3457 9.16566 17.4469 7.42589 17.4469C5.02351 17.4469 3.33997 15.6029 3.33997 13.1266C3.34102 10.6221 4.99747 8.77812 7.39879 8.77812ZM94.5028 11.7503L92.0733 11.393C90.9141 11.2284 90.0857 10.843 90.0857 9.93453C90.0857 8.94376 91.163 8.44891 92.6256 8.44891C94.227 8.44891 95.2488 9.13651 95.4695 10.2648H98.6722C98.3128 7.40296 96.1041 5.72463 92.7089 5.72463C89.2022 5.72463 86.8833 7.51341 86.8833 10.0449C86.8833 12.4661 88.402 13.8704 91.466 14.31L93.8954 14.6674C95.0832 14.832 95.7457 15.3008 95.7457 16.1811C95.7457 17.3094 94.5864 17.7771 92.985 17.7771C91.0243 17.7771 89.9201 16.9791 89.7545 15.7685H86.4967C86.801 18.548 88.9815 20.5014 92.9568 20.5014C96.5741 20.5014 98.9753 18.8502 98.9753 16.0154C98.9753 13.4839 97.2365 12.1629 94.5028 11.7503ZM35.2832 0.137516C34.0685 0.137516 33.1572 1.01783 33.1572 2.22839C33.1572 3.43895 34.0675 4.31926 35.2832 4.31926C36.4979 4.31926 37.4096 3.43895 37.4096 2.22839C37.4096 1.01783 36.4979 0.137516 35.2832 0.137516ZM83.9016 10.87C83.9016 7.78841 82.0245 5.72463 78.0488 5.72463C74.2942 5.72463 72.196 7.62383 71.7815 10.5408H75.0671C75.2327 9.41257 76.1162 8.47704 77.9937 8.47704C79.6783 8.47704 80.5064 9.21983 80.5064 10.1283C80.5064 11.3118 78.9874 11.6139 77.1102 11.8066C74.5703 12.0816 71.423 12.9619 71.423 16.2644C71.423 18.8241 73.3284 20.4743 76.3654 20.4743C78.7394 20.4743 80.2303 19.4836 80.9763 17.9146C81.0869 19.3179 82.1359 20.2264 83.5996 20.2264H85.5321V17.2823H83.9026V10.87H83.9016ZM80.6438 14.4476C80.6438 16.3467 78.9874 17.75 76.9715 17.75C75.7289 17.75 74.6798 17.227 74.6798 16.1269C74.6798 14.7236 76.3642 14.3382 77.9104 14.1736C79.4013 14.0361 80.2293 13.7058 80.6438 13.0724V14.4476ZM63.0575 5.7236C61.2072 5.7236 59.6613 6.49452 58.5571 7.78739V0H55.2442V20.2264H58.5017V18.3553C59.6059 19.7034 61.1803 20.5014 63.0575 20.5014C67.0328 20.5014 70.0427 17.3646 70.0427 13.1266C70.0427 8.88857 66.9777 5.7236 63.0575 5.7236ZM62.5606 17.4469C60.1863 17.4469 58.4466 15.6029 58.4466 13.1266C58.4466 10.6502 60.2136 8.77918 62.5875 8.77918C64.9901 8.77918 66.6734 10.6231 66.6734 13.1266C66.6734 15.6029 64.9346 17.4469 62.5606 17.4469ZM47.3201 5.7236C45.1668 5.7236 43.7583 6.60391 42.9302 7.84258V5.99864H39.6442V20.2253H42.9571V12.4932C42.9571 10.3189 44.3375 8.77812 46.3806 8.77812C48.2859 8.77812 49.4724 10.1262 49.4724 12.0806V20.2264H52.7853V11.8337C52.7866 8.25514 50.9373 5.7236 47.3201 5.7236ZM114.768 12.6588C114.768 8.58643 111.786 5.72463 107.783 5.72463C103.531 5.72463 100.411 8.9167 100.411 13.1266C100.411 17.5573 103.752 20.5014 107.838 20.5014C111.289 20.5014 113.995 18.4647 114.684 15.5758H111.233C110.736 16.8416 109.521 17.5573 107.892 17.5573C105.766 17.5573 104.164 16.2363 103.806 13.9246H114.767V12.6588H114.768ZM104 11.5576C104.525 9.57614 106.016 8.61353 107.727 8.61353C109.605 8.61353 111.04 9.68655 111.372 11.5576H104Z'
      fill='#0052FF'
    />
  </svg>
);

const DATA = [
  {
    url: 'https://medium.com/',
    icon: TEST_ICON,
  },
  {
    url: 'https://hackernoon.com/',
    icon: TEST_ICON,
  },
  {
    url: 'https://forums.babypips.com/',
    icon: TEST_ICON,
  },
  {
    url: 'https://www.quora.com/',
    icon: TEST_ICON,
  },
  {
    url: 'https://investsocial.com/',
    icon: TEST_ICON,
  },
  {
    url: 'https://bitco.in/forum/',
    icon: TEST_ICON,
  },
];

/**
 * 
 * Medium：https://medium.com/
Hackernoon：https://hackernoon.com/
Forums：https://forums.babypips.com/
Quora：https://www.quora.com/
Investscocial：https://investsocial.com/
Bitco：https://bitco.in/forum/

 */

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 3500,
  cssEase: 'linear',
  variableWidth: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Featured = () => {
  return (
    <Box
      bg='bg.gray'
      pb={{
        md: DIVIDE,
        sm: 10,
        xs: 10,
      }}
    >
      <Title
        mb={{
          md: 20,
          sm: 8,
          xs: 8,
        }}
      >
        As Featured In
      </Title>
      <Slider {...settings} rtl={true} lazyLoad={'progressive'}>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://hackernoon.com/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f1}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://www.quora.com/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f2}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://medium.com/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f3}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://investsocial.com/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f4}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://bitco.in/forum/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f5}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
        <Box
          mr={{
            md: 4,
            sm: 2,
            xs: 2,
          }}
          onClick={() => {
            handleNavigate('https://forums.babypips.com/', true);
          }}
          cursor='pointer'
        >
          <Image
            src={f6}
            alt='featured'
            w={{ md: 216, sm: 106, xs: 106 }}
            h={{ md: 20, xs: 10, sm: 10 }}
          />
        </Box>
      </Slider>
      {/* <AutoSlider data={Object.values(query)} mb={5} /> */}

      {/* <AutoSlider data={DATA} isRtl /> */}
    </Box>
  );
};

export default Featured;
