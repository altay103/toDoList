import { Text, VStack, Flex, Button, Input, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import Category from "./category";
import { TodoProps } from "./todo";

class CategoryProps {
    static Id:number=0;
    public categoryId:number=0;
    public categoryName: string="";
    public todos: TodoProps[]=[];
    public categoryList:any;
    public setCategoryList:any;
    constructor(name:string){
        this.categoryName=name;
        this.categoryId=CategoryProps.Id++;
    }
}


function CategoryManager(): JSX.Element {
    const [text, setText] = useState<string>("");
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
    const [active, setActive] = useState<boolean>(false);


    function spawnCategory() {
        
        if(text!=""){
            setText("");
            
            let category:CategoryProps=new CategoryProps(text);
            setCategoryList(categoryList.concat(category));
            
            

        }else{
            alert("Input field can not be empty!");
        }
    }
    function addButton(){
        setActive(true);
    }
    function closeButton(){
        setActive(false);
    }
    return (
        <VStack>
            <Text>Categories</Text>
            {!active?
            <IconButton
                    icon={<MdAdd size="25px" />}
                    isRound={true}
                    aria-label={""} 
                    onClick={addButton}/>
            :
            <Flex width='500px' gap="1">
                <Input 
                 onChange={event => setText(event.target.value)} 
                 value={text} />
                <Button 
                onClick={spawnCategory} >Add</Button>
                 <IconButton
                            icon={<AiOutlineClose />}
                            onClick={closeButton}
                            aria-label={""}>
                 </IconButton>
            </Flex>
            }
            {categoryList.map((category) =>{
                 console.log("rendere");
                return <Category key={category.categoryId}
                categoryName={category.categoryName}
                todos={category.todos}
                categoryId={category.categoryId} 
                categoryList={categoryList} 
                setCategoryList={setCategoryList}></Category>
            })}
            
            
        </VStack>
    )
}

export default  CategoryManager;
export type { CategoryProps };
