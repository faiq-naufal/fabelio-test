import { useState, useEffect } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import Theme from "./components/Theme/Theme";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Divider,
  Button,
  List,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";

import json from "./product.json";
import logo from "./assets/images/fabelio.svg";

function App() {
  // state for Sofa 2 dudukan Vienna
  const [product] = useState(json[0]);
  //state for related product
  const [relatedproduct, setRelatedProduct] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem("relatedProduct");
    let productId = 2;

    if (data) {
      data = JSON.parse(data);
      productId = data.id;
      //check again if cycle of related product is already at the end
      if (productId === json.length) {
        productId = 2;
      } else {
        productId++;
      }

      //only display related product which is the item from index 1 - 9
      setRelatedProduct(json[productId - 1]);

      localStorage.setItem(
        "relatedProduct",
        JSON.stringify(json[productId - 1])
      );
    } else {
      //display the first related product which is in index 1 (productId = 2 - 1)
      setRelatedProduct(json[productId - 1]);

      localStorage.setItem(
        "relatedProduct",
        JSON.stringify(json[productId - 1])
      );
    }
  }, []);

  return (
    <Theme>
      <Box
        as="header"
        width="full"
        zIndex={100}
        boxShadow="md"
        background="#fff"
        py={[3, 3, 4]}
      >
        <Container maxW={{ lg: "1280px" }} px={[4, 4, 6]}>
          <Flex alignItems="center">
            <Box mr={5}>
              <Image src={logo} alt="Fabelio Logo" />
            </Box>
            <List
              d={["none", "none", "flex"]}
              fontSize={["sm", "sm", "sm", "md"]}
              fontWeight={500}
            >
              <ListItem mr={3}>
                <Link href="#">Ruang Tamu</Link>
              </ListItem>
              <ListItem mr={3}>
                <Link href="#">Kamar Tidur</Link>
              </ListItem>
              <ListItem mr={3}>
                <Link href="#">Ruang Makan</Link>
              </ListItem>
              <ListItem mr={3}>
                <Link href="#">Ruang Kerja</Link>
              </ListItem>
              <ListItem mr={3}>
                <Link href="#">Dekorasi</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Peralatan Elektronik</Link>
              </ListItem>
            </List>
          </Flex>
        </Container>
      </Box>
      <Container
        d="flex"
        flexDirection="column"
        maxW={{ lg: "1280px" }}
        px={[4, 4, 6]}
        my={10}
      >
        <Box as="section" mb={20}>
          <Box>
            <Heading
              as="h1"
              textAlign="center"
              fontSize={["2xl", "2xl", "3xl"]}
              fontWeight={400}
              mb={8}
            >
              {product.productName}
            </Heading>
            <Box>
              <Box
                maxWidth="720px"
                mx="auto"
                overflow="hidden"
                borderRadius="8px"
                opacity={0.4}
                filter="grayscale(1)"
                position="relative"
                fontSize={["28px", "40px", "60px"]}
                _before={{
                  content: '"SOLD OUT"',
                  width: "100%",
                  position: "absolute",
                  color: "gray.800",
                  fontSize: "inherit",
                  fontWeight: 700,
                  textAlign: "center",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  mx="auto"
                  src={product.image}
                  alt={product.productName}
                />
              </Box>
              <Box textAlign="center" mb={5}>
                <Text
                  as="strong"
                  d="block"
                  mb={5}
                  fontSize={["xl", "xl", "2xl"]}
                  color="gray.800"
                >
                  Rp. {product.price.toLocaleString()}
                </Text>
                <Button size="md" leftIcon={<FaCartPlus />} isDisabled>
                  Tambah ke Troli
                </Button>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontSize={["lg", "lg", "xl"]}
                  mb={3}
                  fontWeight={700}
                >
                  Spesifikasi Produk
                </Heading>
                <Box mb={2} fontSize={["sm", "sm", "md"]}>
                  <Text as="strong">Dimensi :</Text>
                  <Text>{product.dimension}</Text>
                </Box>
                <Box mb={2} fontSize={["sm", "sm", "md"]}>
                  <Text as="strong">Warna :</Text>
                  <Text textTransform="capitalize">{product.colors}</Text>
                </Box>
                <Box mb={2} fontSize={["sm", "sm", "md"]}>
                  <Text as="strong">Material :</Text>
                  <Text textTransform="capitalize">{product.materials}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box as="section">
          <Heading
            as="h1"
            textAlign="center"
            fontSize={["2xl", "2xl", "3xl"]}
            fontWeight={400}
            mb={8}
          >
            Produk Serupa
          </Heading>
          {relatedproduct ? (
            <Box maxWidth="320px">
              <Box overflow="hidden" borderRadius="8px">
                <Image
                  mx="auto"
                  src={relatedproduct.image}
                  alt={relatedproduct.productName}
                />
              </Box>
              <Divider my={5} opacity={1} />
              <Box>
                <Heading as="h2" fontSize="xl" mb={2} fontWeight={700}>
                  {relatedproduct.productName}
                </Heading>
                <Text
                  as="strong"
                  d="block"
                  mb={4}
                  fontSize="md"
                  color="gray.800"
                  fontWeight={400}
                >
                  Rp. {relatedproduct.price.toLocaleString()}
                </Text>
                <Button
                  size="sm"
                  leftIcon={<FaCartPlus />}
                  bgColor="#017865"
                  color="white"
                  _hover={{ backgroundColor: "#017865" }}
                  _active={{ backgroundColor: "#017865" }}
                >
                  Tambah ke Troli
                </Button>
              </Box>
              <Divider my={5} opacity={1} />
              <Box>
                <Heading as="h3" fontSize="lg" mb={3} fontWeight={700}>
                  Spesifikasi Produk
                </Heading>
                <Box mb={2} fontSize="sm">
                  <Text as="strong">Dimensi :</Text>
                  <Text>{relatedproduct.dimension}</Text>
                </Box>
                <Box mb={2} fontSize="sm">
                  <Text as="strong">Warna :</Text>
                  <Text textTransform="capitalize">
                    {relatedproduct.colors}
                  </Text>
                </Box>
                <Box mb={2} fontSize="sm">
                  <Text as="strong">Material :</Text>
                  <Text textTransform="capitalize">
                    {relatedproduct.materials}
                  </Text>
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Theme>
  );
}

export default App;
