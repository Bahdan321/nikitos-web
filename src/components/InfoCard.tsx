import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
    title: string;
    text: string;
}

export function InfoCard({ title, text }: InfoCardProps) {
    return (
        <Card className="w-full transition-all hover:shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{text}</p>
            </CardContent>
        </Card>
    );
}