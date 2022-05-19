import { Center, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";

function Header() {
    function home(){
        window.location.href="/"
    }
    return (
        <VStack>
            <Flex>
                <Center>
                    <IconButton icon={<AiOutlineHome size={25}/>} aria-label={"home"} onClick={home}></IconButton>
                </Center>
                <Text padding={'3'} fontSize='3xl'>
                    Todo List App
                </Text>
            </Flex>

        </VStack>
    )
}

export default Header;