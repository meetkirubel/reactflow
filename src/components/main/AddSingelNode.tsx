import { useToast } from "@/components/ui/use-toast";
import { addNode } from "@/redux/future/node/nodesSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddSingelNode = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [inputText, setInputText] = useState<string>("");


  const handelClick = () => {
    dispatch(addNode(inputText));
    toast({ title: "Node Added" });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  
  return (
    <div className="flex gap-4 pb-8 align-middle flex-wrap">
      <Input
        value={inputText}
        onChange={handleInputChange}
        className="w-[20rem]"
        type="email"
        placeholder="Add node here..."
        required
      />
      <Button onClick={handelClick}> Add Node </Button>
    </div>
  );
};

export default AddSingelNode;
