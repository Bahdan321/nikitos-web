import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface TestData {
    name: string;
    input: string;
    expected: string;
    resultImage: string;
}

interface TestDataTableProps {
    data: TestData[];
}

export function TestDataTable({ data }: TestDataTableProps) {
    return (
        <Table>
            <TableCaption>Результаты тестирования.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Название теста</TableHead>
                    <TableHead>Вводные данные</TableHead>
                    <TableHead>Ожидаемый результат</TableHead>
                    <TableHead>Итоговый результат</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((test, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{test.name}</TableCell>
                        <TableCell>{test.input}</TableCell>
                        <TableCell>{test.expected}</TableCell>
                        <TableCell>
                            <img
                                src={test.resultImage}
                                alt={`Результат теста ${test.name}`}
                                className="w-64 h-64 object-contain" // Small image size
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}