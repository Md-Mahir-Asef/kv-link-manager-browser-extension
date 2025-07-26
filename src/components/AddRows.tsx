import { TableFooter, TableRow, TableCell } from "@/components/ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export function AddRows() {
  const [key, setKey] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].title && tabs[0].url) {
        setKey(tabs[0].title);
        setLink(tabs[0].url);
      } else {
        console.log("Can't find tab title and url.");
      }
    });
  }, []);

  const addLink = () => {
    try {
      if (
        typeof chrome !== "undefined" &&
        chrome.storage?.local &&
        link.includes("://")
      ) {
        chrome.storage.local.set({ [key]: link }, () => {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
          } else {
            window.location.reload();
            toast("Link Added Successfully!");
            console.log("Link Added Successfully!");
          }
        });
      } else {
        toast("Failed Adding Link!");
      }
    } catch (err) {
      toast("Failed Adding Link!");
    }
  };
  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          <Input
            type="text"
            id="key"
            placeholder={"Key"}
            value={key}
            className="truncate"
            onFocus={(e) => e.target.select()}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addLink();
              }
            }}
          />
        </TableCell>
        <TableCell>
          <Input
            type="text"
            id="link"
            placeholder={"Link"}
            value={link}
            className="text-blue-600 focus:underline truncate"
            onFocus={(e) => e.target.select()}
            onChange={(e) => setLink(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addLink();
              }
            }}
          />
        </TableCell>
        <TableCell>
          <Button size="sm" onClick={addLink}>
            <Plus />
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
