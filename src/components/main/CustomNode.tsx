import { copyNode, deleteNode } from "@/redux/future/node/nodesSlice";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Handle, NodeProps, Position } from "reactflow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const CustomNode = ({
  data: { label },
  id,
}: NodeProps<{ label: string; id: string }>) => {
  return (
    <div className="border min-w-48 p-4 bg-white rounded-md flex align-middle justify-center relative">
      <p> {label} </p>
      <div className="absolute right-[5%] top-[50%] translate-y-[-40%]">
        <Dropdown id={id} />
      </div>

      <Handle type="target" className="p-1" position={Position.Bottom} />
      <Handle type="source" className="p-1" position={Position.Top} />
    </div>
  );
};

const Dropdown = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const handelCopy = () => {
    dispatch(copyNode(id));
  };
  const handelDelete = () => {
    dispatch(deleteNode(id));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoMdMore className="text-xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Option</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between" onClick={handelCopy}>
          Copy <IoCopyOutline />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={handelDelete}
        >
          Delete <AiOutlineDelete />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomNode;
