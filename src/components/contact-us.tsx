import {Heading, Link, Stack} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Stack>
      <Heading>Contact Us</Heading>
      <Link
        href="mailto:Support@caffeine-driven-development.com"
        color="text"
      >
        Support@caffeine-driven-development.com
      </Link>
    </Stack>
  )
}