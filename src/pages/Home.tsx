import { useEffect, useState } from "react";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DataTable } from "@/components/DataTable";

function Home() {
  const [trigger, setTrigger] = useState(0);
  const [data, setData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      setData(items);
    });
    console.log(data);
  }, [trigger]);

  const refreshHandler = () => {
    setTrigger((pre) => pre + 1);
    toast("Reloaded!");
  };

  return (
    <div className="pl-4">
      <div className="flex flex-row">
        <h2 className="p-2 font-[550] text-sm">Your Links</h2>
        <Button
          variant="ghost"
          onClick={refreshHandler}
          size="icon"
          className="p-2"
        >
          <RotateCw />
        </Button>
      </div>
      <div className="">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default Home;
