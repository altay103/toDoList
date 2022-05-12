import { Text, VStack} from "@chakra-ui/react";

function Header(){
    
    return(
        <VStack>
            <Text padding={'3'} fontSize='3xl'>
                Todo List App
            </Text>
        </VStack>
    )
}

export default Header;