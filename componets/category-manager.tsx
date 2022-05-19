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


  useEffect(() => {//load tasks
    let handle: any = {}
    if (localStorage.getItem("categories") !== undefined &&
      localStorage.getItem("categories") !== null &&
      typeof localStorage.getItem("categories") === typeof "") {
      console.log(typeof localStorage.getItem("categories"))
      //@ts-ignore
      handle = JSON.parse(localStorage.getItem("categories"));
  
      if (handle["categories"] !== undefined) {
        let tempCategoryList: CategoryInfo[] = [];
        
        for (let i = 0; i < handle["categories"].length; i++) {
            tempCategoryList = tempCategoryList.concat({
            categoryName: handle["categories"][i].categoryName,
            todos: handle["categories"][i].todos
          })
        }

        if (handle["categories"].length > 0) {
          //g
          setCategoryList(tempCategoryList)

        }
      } else {
        handle["categories"] = []
        localStorage.setItem("categories", JSON.stringify(handle))
        setCategoryList(handle["categories"] )
      }



    } else {
  
      handle["categories"] = []
      localStorage.setItem("categories", JSON.stringify(handle))
      setCategoryList(handle["categories"])
    }

  }, [])

  //save the categories every render
  useEffect(() => {
    
    if (localStorage.getItem("categories") !== undefined && localStorage.getItem("categories") !== null ) {
        //@ts-ignore
        let storageTasks: any = JSON.parse(localStorage.getItem("categories"));
        storageTasks["categories"] = categoryList;
        localStorage.setItem("categories", JSON.stringify(storageTasks));
       
    }
    // else{

    //   localStorage.setItem("categories", JSON.stringify({"categories":[]}))
    // }

}, [categoryList])



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
