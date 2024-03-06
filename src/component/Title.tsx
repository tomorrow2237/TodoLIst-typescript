import { Heading } from "@chakra-ui/react";

const Title = () => {
    return (
        <label htmlFor="input">
            <Heading 
            fontWeight="bold" 
            fontSize="4xl"
            textAlign="center"
            >Simplized Todo List</Heading>
        </label>
    );
}

export default Title;
