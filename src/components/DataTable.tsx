import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTable({ data }: { data: { [key: string]: string } }) {
  const entries = Object.entries(data);
  return (
    <Table>
      <TableCaption>A list of your links.</TableCaption>
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
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
