import {Heading, Text, Link, Stack} from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Stack>
      <Heading size={{ lg: "5xl", sm: "3xl" }}>Contact Us</Heading>
      <Text><Link
        href="mailto:Support@caffeine-driven-development.com"
        color="text"
      >
        Support@caffeine-driven-development.com
      </Link></Text>
    </Stack>
  )
}