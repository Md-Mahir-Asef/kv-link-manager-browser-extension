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
import { AddRows } from "./AddRows";
import { RotateCw } from "lucide-react";

export function DataTable({
  data,
  refreshHandler,
  handleDeletion,
}: {
  data: { [key: string]: string };
  refreshHandler: () => void;
  handleDeletion: (key: string) => void;
}) {
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
          <TableHead>Links</TableHead>
          <TableHead className="text-center">
            <Button onClick={refreshHandler} variant="outline" size="sm">
              <RotateCw />
            </Button>
          </TableHead>
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
                className="px-5"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <AddRows />
    </Table>
  );
}
