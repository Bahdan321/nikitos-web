
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TaskCardWithGithubProps {
  title: string;
  description: string;
  githubLink?: string;
  screenshots: string[];
  className?: string;
  cols?: number;
}

export function TaskCardWithGithub({
  title,
  description,
  githubLink,
  screenshots,
  className,
  cols = 3,
}: TaskCardWithGithubProps) {
  return (
    <Card className={cn("w-full transition-all hover:shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Посмотреть код на GitHub
        </a>
        {cols === 3 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md bg-soft-blue p-2"
              >
                <img
                  src={screenshot}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full max-h-96 object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md bg-soft-blue p-2"
              >
                <img
                  src={screenshot}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full max-h-96 object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
