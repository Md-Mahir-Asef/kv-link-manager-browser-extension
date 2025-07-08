import { TableFooter, TableRow, TableCell } from "@/components/ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function AddRows() {
  const [key, setKey] = useState("");
  const [link, setLink] = useState("");

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
            placeholder="Key"
            onChange={(e) => setKey(e.target.value)}
          />
        </TableCell>
        <TableCell>
          <Input
            type="text"
            id="link"
            placeholder="Link"
            className="text-blue-600 focus:underline"
            onChange={(e) => setLink(e.target.value)}
          />
        </TableCell>
        <TableCell>
          <Button size="sm" onClick={addLink}>
            Add Link
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
