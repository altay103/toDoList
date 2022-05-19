import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Todo, { TodoProps } from "./todo";

function Category({
  //@ts-ignore
  values: { category, categoryList, setCategoryList },
}): JSX.Element {
  /*   console.log("propss => ", props); */
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  function addButton() {
    setActive(true);
  }
  function spawnTodo() {
    text !== ""
      ? setCategoryList(
          categoryList.map((el:any) =>
            el.categoryName === category.categoryName
              ? { ...el, todos: [...el.todos, new TodoProps(text,categoryList)] }
              : el
          )
        )
      : alert("Input field can not be empty!");
  }
  function closeButton() {
    setActive(false);
  }
  function deleteCategory() {
    setCategoryList([
      ...categoryList.filter(
        (val:any) => val.categoryName !== category.categoryName
      ),
    ]);
  }
  return (
    <VStack>
      <Box width="500px" bgColor="gray.100">
        <Flex width="500px" justify="center" gap="1">
          <Center>
            <Text isTruncated width="300px" align="center" fontSize="xl">
              {category.categoryName}
            </Text>
          </Center>

          {!active ? (
            <>
              <IconButton
                icon={<MdAdd size="25px" />}
                isRound={true}
                aria-label={""}
                onClick={addButton}
              />
              <IconButton
                icon={<BsTrash size="25px" />}
                isRound={true}
                aria-label={""}
                onClick={deleteCategory}
              />
            </>
          ) : (
            <>
              <Input
                width="200px"
                placeholder="todo girrr"
                onChange={(event) => setText(event.target.value)}
                value={text}
              />
              <Button onClick={spawnTodo}>Add</Button>
              <IconButton
                icon={<AiOutlineClose />}
                onClick={closeButton}
                aria-label={""}
              ></IconButton>
            </>
          )}
        </Flex>
      </Box>
      <Box width="450px" bgColor="gray.100">
        <VStack>
          {category.todos.map((todo:any, index:any) => {
            return (
              <Center key={String(index)}>
                <Todo 
                  todoId={todo.todoId}
                  todoName={todo.todoName}
                  category={category}
                  setCategoryList={setCategoryList} 
                  categoryList={categoryList}></Todo>
              </Center>
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
}

export default Category;
