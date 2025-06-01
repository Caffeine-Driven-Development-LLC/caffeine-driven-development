import {Heading, Text, Link, Stack} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Stack>
      <Heading>Contact Us</Heading>
      <Text><Link
        href="mailto:Support@caffeine-driven-development.com"
        color="text"
      >
        Support@caffeine-driven-development.com
      </Link></Text>
    </Stack>
  )
}