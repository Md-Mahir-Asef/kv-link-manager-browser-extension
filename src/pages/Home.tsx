import { useEffect, useState } from "react";
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

  const handleDeletion = (key: string) => {
    try {
      chrome.storage.local.remove(key, () => {
        toast(`Successfully Deleted Link to ${key}`);
        setTrigger((pre) => pre + 1);
      });
    } catch (err) {
      toast("Failed to Delete Link");
    }
  };

  return (
    <div className="p-5 pt-0">
      <DataTable
        data={data}
        refreshHandler={refreshHandler}
        handleDeletion={handleDeletion}
      />
    </div>
  );
}

export default Home;
