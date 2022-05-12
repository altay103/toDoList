import {
  Text,
  VStack,
  Flex,
  Button,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import Category from "./category";
import { TodoProps } from "./todo";

/* class CategoryProps {
  static Id: number = 0;
  public categoryId: number = 0;
  public categoryName: string = "";
  public todos: TodoProps[] = [];
  public categoryList: any;
  public setCategoryList: any;
  constructor(name: string) {
    this.categoryName = name;
    this.categoryId = CategoryProps.Id++;
  }
} */

interface CategoryInfo {
  categoryName: string;
  todos: Array<any>;
}

function CategoryManager(): JSX.Element {
  const [text, setText] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<CategoryInfo>>([]);
  const [active, setActive] = useState<boolean>(false);
  const [testState, setTest] = useState("");
  function spawnCategory() {
    text != "" &&
      !categoryList.some((el) => el.categoryName === text) &&
      setCategoryList(categoryList.concat({ categoryName: text, todos: [] }));
    setText("");
  }
  function addButton() {
    setActive(true);
  }
  function closeButton() {
    setActive(false);
  }

  useEffect(() => {
    console.log("categoryList =>", categoryList);
  }, [categoryList]);
  useEffect(() => {
    console.log("test state=> ", testState);
  }, [testState]);
  return (
    <VStack>
      <Text>Categories</Text>
      {!active ? (
        <IconButton
          icon={<MdAdd size="25px" />}
          isRound={true}
          aria-label={""}
          onClick={addButton}
        />
      ) : (
        <Flex width="500px" gap="1">
          <Input
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <Button onClick={spawnCategory}>Add</Button>
          <IconButton
            icon={<AiOutlineClose />}
            onClick={closeButton}
            aria-label={""}
          ></IconButton>
        </Flex>
      )}
      {categoryList.map((category, index) => {
        /*    console.log("rendere"); */
        return (
          <Category
            key={String(index)}
            values={{ category, categoryList, setCategoryList }}
          ></Category>
        );
      })}
    </VStack>
  );
}

export default CategoryManager;
