import { extractNodes } from "@/redux/future/node/nodesSlice";
import { ExtractedItem } from "@/types/type";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast"

interface MenuExtractionProps {}



const MenuExtractionPanel: React.FC<MenuExtractionProps> = () => {
  const { toast } = useToast()
  const [inputText, setInputText] = useState<string>("");
  const [extractedItems, setExtractedItems] = useState<ExtractedItem[]>([]);
  const dispatch = useDispatch()

  const handleExtractClick = () => {

    const regex = /^\d+(\.|\:) (.*)/gm;
    const matches = inputText.match(regex) || [];
    const extractedList: ExtractedItem[] | [] = matches.map((match) => ({
      text: match.slice(2),
    }));
    if(!extractedList.length){
      toast({
        title: "Opps...",
        description: "No valid menu items found.",})
    }else{
      setExtractedItems(extractedList);
      extractedList && dispatch(extractNodes(extractedList))
      toast({
        title: "Menu Extracted",
        description: "Menu extracted and added to the nodes.",})
    };
    }


  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="menu-extraction-panel">
      <h1>Menu Extraction</h1>
      <Textarea
        id="message"
        className="bg-transparent min-h-64"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Paste text containing menus here..."
      />
      <Button className="my-4"  onClick={handleExtractClick}> Extract </Button>

      {extractedItems.length > 0 ? (
        <ul>
          {extractedItems.map((item, index) => (
            <li className="list-decimal" key={index}>{item.text}</li>
          ))}
        </ul>
      ) : (
        <p className="font-semibold">No valid menu items found.</p>
      )}
    </div>
  );
};

export default MenuExtractionPanel;
