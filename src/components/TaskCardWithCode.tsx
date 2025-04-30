import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TaskCardWithCodeProps {
  title: string;
  description: string;
  screenshot: string;
  code: string;
  className?: string;
}

export function TaskCardWithCode({
  title,
  description,
  screenshot,
  code,
  className,
}: TaskCardWithCodeProps) {
  return (
    <Card className={cn("w-full transition-all hover:shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <div className="overflow-hidden rounded-md bg-soft-purple p-2">
          <img
            src={screenshot}
            alt={title}
            className="w-full max-h-48 sm:max-h-64 md:max-h-96 object-contain rounded-md"
          />
        </div>
        <pre className="rounded-lg bg-gray-100 p-4 overflow-x-auto text-sm sm:text-base">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}