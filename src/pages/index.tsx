import {Heading, Link, Stack, Text} from "@chakra-ui/react";
import ProductsList from "@/components/products-list";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function IndexPage() {

  return (
    <Stack minHeight="100vh">
      <Heading>Caffeine Driven Development</Heading>
      <Stack flex={1}>
        <Text>
          We are a small business focused on small tech, lightweight, efficient, and no-nonsense software solutions
          with no hidden agendas. Our aim is not to become the next big tech company, but to use our expertise as
          software developers to create great tools with no catch to our users. We believe the best way to accomplish
          this is through transparency and open-source code. You can find ours on
          <Link href="https://github.com/Caffeine-Driven-Development-LLC" color="text">Github</Link>.
        </Text>
        <ProductsList />
        <ContactUs />
      </Stack>
      <Footer/>
    </Stack>
  )
}