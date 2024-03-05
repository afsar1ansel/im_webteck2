import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
// interface Props {
//   children: React.ReactNode;
// }

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
    AOS.init();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  return (
    <>
      <Box
        // overflowX={"hidden"}
        position={"sticky"}
        opacity={scrollY > 0 ? 1 : 0}
        pointerEvents={scrollY > 0 ? "auto" : "none"}
        bg={"#EC9600"}
        color={"white"}
        height={"80px"}
        margin={"auto"}
        transition={"opacity 1s ease"}
        px={4}
        top={0}
        zIndex={100}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"} mt={1} width={"100%"}>
            <Box
              display={{ base: "flex", md: "none" }}
              justifyContent={"center"}
              width={"100%"}
            >
              <Image
                width={scrollY > 0 ? "10%" : "10%"}
                //   position={"inherit-layer"}
                src={"https://www.carmelpreprimary.org/img/logo.png"}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Flex
                // border={"1px solid black"}
                justifyContent={"end"}
                gap={10}
                width={"100%"}
                fontFamily={"poppins"}
                fontWeight={"600"}
                letterSpacing={"1px"}
                display={scrollY > 0 ? "flex" : "none"}
              >
                <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "red" }}
                >
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  Home
                </Box>
                </Link>
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>Blog</Box>
                <Link 
                to="vision"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "#d12881" }}
                >
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  Vision
                </Box>
                </Link>
                <Link
                to="Animation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "#d12881" }}
                >
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  About
                </Box>
                </Link>
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  Contact
                </Box>
              </Flex>
              <Box
                width={"25%"}
                display={scrollY > 0 ? "flex" : "none"}
                justifyContent={"center"}
                // border={"1px solid black"}
                height={"auto"}
                position={"relative"}
                top={6}
                padding={"1rem"}
                backgroundColor={"#EC9600"}
                borderBottomRadius={"50%"}
              >
                <Image
                  width={"65%"}
                  // top={7}
                  // zIndex={102}
                  //   transition={"width 2s ease, margin-top 2s ease"}
                  src={"https://www.carmelpreprimary.org/img/logo.png"}
                />
              </Box>
              <Flex
                width={"100%"}
                // border={"1px solid red"}
                justifyContent={"start"}
                gap={10}
                fontFamily={"poppins"}
                fontWeight={"600"}
                letterSpacing={"1px"}
                display={scrollY > 0 ? "flex" : "none"}
              >
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  Pay Free Online
                </Box>
                <Box _hover={{ color: "#d12881", cursor: "pointer" }}>
                  Webmail
                </Box>
              </Flex>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box className="home" width={"auto"}>
        <Image
          position={"absolute"}
          zIndex={101}
          width={"7%"}
          right={4}
          top={4}
          display={scrollY > 0 ? "none" : "block"}
          data-aos="fade-down"
          src="https://www.carmelpreprimary.org/img/logo.png"
        />
        <Image
          position={"relative"}
          bottom={20}
          width={"100%"}
          src="https://www.carmelpreprimary.org/img/cpp_cover.png"
        />
      </Box>
    </>
  );
}
