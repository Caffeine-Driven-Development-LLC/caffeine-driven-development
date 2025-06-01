import {Box, Heading, Stack} from "@chakra-ui/react";
import ProductsList from "@/components/products-list";

export default function IndexPage() {

  return (
    <>
      <Box color="primary" backgroundColor="secondary">
        <Stack>
          <Heading>Caffeine Driven Development</Heading>
          <ProductsList />
        </Stack>
      </Box>
    </>
  )
}