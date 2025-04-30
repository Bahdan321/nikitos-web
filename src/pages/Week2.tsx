
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week2 = () => {
  const task = {
    title: 'Разработка АИС "Компьютерной техники и периферийных устройств"',
    description: "Приложение, разработанное для того, чтобы клиенты могли добавлять товары в корзину и создавать заказы.А все это могли отслеживать администраторы.",
    githubLink: "https://github.com/1Haruko1/praktika",
    screenshots: ["/public/secondWeek/ERD.png", "/public/secondWeek/ChoiceDiagramm.png", "/public/secondWeek/StateDiagramm.png", "/public/secondWeek/DetailSchema.png", "/public/secondWeek/BigDiagramm.jpg", "/public/secondWeek/SecondBigDiagramm.jpg", "/public/secondWeek/first.jpg", "public/secondWeek/second.jpg", "public/secondWeek/third.jpg", "public/secondWeek/fourth.jpg", "public/secondWeek/five.jpg", "public/secondWeek/six.jpg", "public/secondWeek/seven.jpg", "public/secondWeek/eight.jpg", "public/secondWeek/nine.jpg"],
  };

  return (
    <div className="container mx-auto py-8 px-4 xs:mb-24">
      <h1 className="text-3xl font-bold mb-8">Вторая неделя практики</h1>
      <TaskCardWithGithub {...task} cols={2} />
    </div>
  );
};

export default Week2;
