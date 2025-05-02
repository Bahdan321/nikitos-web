
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week2 = () => {
  const task = {
    title: 'Разработка АИС "Cнабжение комплектующими"',
    description: "",
    githubLink: "",
    screenshots: ["/public/secondWeek/ERD.png", "/public/secondWeek/ChoiceDiagramm.png", "/public/secondWeek/MainSolution.png", "/public/secondWeek/DetailSchema.png", "/public/secondWeek/BigDiagramm.png", "/public/secondWeek/SecondBigDiagramm.png", "/public/thirdWeek/test1.png", "/public/thirdWeek/test2.png", "/public/thirdWeek/test3.png", "/public/thirdWeek/test4.png", "/public/thirdWeek/test5.png", "/public/thirdWeek/test6.png", "/public/thirdWeek/test7.png", "/public/thirdWeek/test8.png", "/public/thirdWeek/test9.png", "/public/thirdWeek/test10.png", "/public/thirdWeek/test11.png", "/public/thirdWeek/test12.png", "/public/thirdWeek/test13.png", "/public/thirdWeek/test14.png", "/public/thirdWeek/test15.png",],
  };

  return (
    <div className="container mx-auto py-8 px-4 xs:mb-24">
      <h1 className="text-3xl font-bold mb-8">Вторая неделя практики</h1>
      <TaskCardWithGithub {...task} cols={2} />
    </div>
  );
};

export default Week2;
