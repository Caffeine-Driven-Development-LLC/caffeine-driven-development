import {Box, Heading, Image, Text, Stack, HStack} from "@chakra-ui/react";

export default function ProductsList() {
  return (
     <Box>
      <Stack>
        <Heading>Products</Heading>
        <Box>
          <HStack>
            <Image src="AppTrackGhost.svg" height="40" alt="AppTrack Logo" />
            <Stack>
              <Heading>AppTrack</Heading>
              <Text>A simple desktop application to organize your career search. AppTrack aims to replace that old spreadsheet previously used to track the job search with a clean and easy to use interface.</Text>
            </Stack>
          </HStack>
        </Box>
      </Stack>
     </Box>
  )
}