import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  useBreakpointValue,
} from '@chakra-ui/react'
import Head from 'next/head'

type Props = {}

export default function Page({}: Props) {
  return (
    <Box>
      <Head>
        <title>Frontend Mentor | FAQ accordion</title>
      </Head>
      <Flex
        minH={'100vh'}
        width={'full'}
        position={'relative'}
        align={'center'}
        justify={'center'}
        bg={'neutral.lightPink'}
      >
        <Box
          bg={{
            base: 'url(/images/background-pattern-mobile.svg)',
            md: 'url(/images/background-pattern-desktop.svg)',
          }}
          width={'full'}
          height={{
            base: '25%',
            md: '30%',
          }}
          bgPosition={{
            base: 'center',
            md: 'center',
          }}
          bgRepeat={{
            base: 'no-repeat',
            md: 'no-repeat',
          }}
          bgSize={{
            base: 'cover',
            md: 'cover',
          }}
          position={'absolute'}
          left={0}
          top={0}
        />

        <Card p={8} m={8} w={'lg'} boxShadow={'2xl'} borderRadius={'2xl'}>
          <HStack pb={4} mt={2} spacing={6}>
            <Image
              src="/images/icon-star.svg"
              alt="icon-star"
              height={30}
              width={'auto'}
            />
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl' }}
              transition={'font-size 0.3s'}
            >
              FAQs
            </Heading>
          </HStack>
          <Accordion as={Stack} divider={<StackDivider />}>
            {faqs.map(({ question, answer }) => (
              <Box key={question}>
                <AccordionItem border={'none'}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        px={0}
                        py={4}
                        display={'flex'}
                        justifyContent={'space-between'}
                        gap={3}
                        _hover={{
                          color: 'neutral.purple',
                        }}
                      >
                        <Heading as="h2" size="md" textAlign={'left'}>
                          {question}
                        </Heading>
                        {isExpanded ? (
                          <Image
                            src="/images/icon-minus.svg"
                            alt="icon-minus"
                            height={22}
                            width={'auto'}
                          />
                        ) : (
                          <Image
                            src="/images/icon-plus.svg"
                            alt="icon-plus"
                            height={22}
                            width={'auto'}
                          />
                        )}
                      </AccordionButton>
                      <AccordionPanel
                        px={0}
                        pt={3}
                        pb={5}
                        color={'neutral.grayishPurple'}
                      >
                        {answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Box>
            ))}
          </Accordion>
        </Card>
      </Flex>
    </Box>
  )
}

const faqs = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
]

/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | FAQ accordion</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  FAQs

  What is Frontend Mentor, and how will it help me?

  Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.

  Is Frontend Mentor free?

  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.

  Can I use Frontend Mentor projects in my portfolio?

  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!

  How can I get help if I'm stuck on a Frontend Mentor challenge?
  
  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.

  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>
*/
