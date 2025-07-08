import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

export function DataTable({ data }: { data: { [key: string]: string } }) {
  // const navigate = useNavigate();

  const handleDeletion = (key: string) => {
    chrome.storage.local.remove(key, () => {
      toast(`Successfully Deleted Link to ${key}`);
    });
  };

  const redirectionHandler = (link: string) => {
    window.open(link, "_blank");
  };

  const entries = Object.entries(data);

  return (
    <Table className="p-4">
      <TableCaption className="p-4">A list of your links.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Keys</TableHead>
          <TableHead>Values</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map(([key, value]) => (
          <TableRow key={key}>
            <TableCell>{key}</TableCell>
            <TableCell
              id="linkRedirectionPointTableCell"
              className="text-blue-600 hover:underline visited:text-purple-600 cursor-pointer"
              onClick={() => redirectionHandler(value)}
            >
              {value}
            </TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDeletion(key)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
