import {Heading, Stack} from "@chakra-ui/react";
import ProductsList from "@/components/products-list";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function IndexPage() {

  return (
    <Stack minHeight="100vh">
      <Heading>Caffeine Driven Development</Heading>
      <Stack flex={1}>
        <ProductsList />
        <ContactUs />
      </Stack>
      <Footer/>
    </Stack>
  )
}