import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useState } from "react";

function Add() {
  const [key, setKey] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const addLink = () => {
    try {
      if (typeof chrome !== "undefined" && chrome.storage?.local) {
        chrome.storage.local.set({ [key]: link }, () => {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
          } else {
            navigate("/");
            toast("Link Added Successfully!");
            console.log("Link Added Successfully!");
          }
        });
      } else {
        console.log("Chrome Undefined");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-3 p-7">
      <div>
        <Label htmlFor="key">Key</Label>
        <Input
          type="text"
          id="key"
          placeholder="Key"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="link">Link</Label>
        <Input
          type="text"
          id="link"
          placeholder="Link"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button onClick={addLink}>Add Link</Button>
      </div>
    </div>
  );
}

export default Add;
