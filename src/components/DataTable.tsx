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
import { Trash2 } from "lucide-react";

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
    <Table className="p-4 table-fixed">
      <TableCaption className="p-4">A list of your links.</TableCaption>
      <colgroup>
        <col className="w-[40vw]" />
        <col className="w-[40vw]" />
        <col className="w-[10vw]" />
      </colgroup>
      <TableHeader>
        <TableRow>
          <TableHead>Keys</TableHead>
          <TableHead>Links</TableHead>
          <TableHead>
            <Button onClick={refreshHandler} variant="outline" size="sm">
              <RotateCw />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="truncate">{key}</TableCell>
            <TableCell
              id="linkRedirectionPointTableCell"
              className="text-blue-600 hover:underline visited:text-purple-600 cursor-pointer truncate"
              onClick={() => redirectionHandler(value)}
            >
              {value}
            </TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDeletion(key)}
                className="px-5 pl-0"
              >
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <AddRows />
    </Table>
  );
}
