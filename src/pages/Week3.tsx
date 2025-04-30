
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";
import { TestDataTable } from "@/components/TestDataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCard } from "@/components/InfoCard"; // Добавляем импорт

const Week3 = () => {
  const mobileAppTask = {
    title: "Мобильное приложение",
    description: "Разработка мобильного приложения",
    githubLink: "https://github.com/1Haruko1/praktika",
    screenshots: ["/public/thirdWeek/first.jpg", "/public/thirdWeek/second.jpg", "/public/thirdWeek/third.jpg", "/public/thirdWeek/fourth.jpg", "/public/thirdWeek/five.jpg", "/public/thirdWeek/six.jpg", "/public/thirdWeek/seven.jpg", "/public/thirdWeek/eight.jpg", "/public/thirdWeek/nine.jpg"],
  };

  const testData = [
    { name: "Зарегистрировать нового пользователя", input: "Валидная почта,валидный логин,валидный пароль", expected: "Запись о пользователе добавлена", resultImage: "/public/thirdWeek/test1.png" },
    { name: "Зарегистрировать нового пользователя", input: "Неваалидная почта,валидный логин,валидный пароль", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test2.png" },
    { name: "Войти в систему под пользователем", input: "Данные от существующего аккаунта", expected: "Успешный вход в аккаунт", resultImage: "/public/thirdWeek/test3.png" },
    { name: "Войти в систему под пользователем", input: "Данные от не существующего аккаунта", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test4.png" },
    { name: "Смена фильтра", input: "Измнение фильтра", expected: "Фильтр сменен", resultImage: "/public/thirdWeek/test5.png" },
    { name: "Добавить товар", input: "Добавить товар в корзину", expected: "Добавится товар в корзину", resultImage: "/public/thirdWeek/test6.png" },
    { name: "История заказов", input: "Посмотреть историю заказов", expected: "Покажется история заказов", resultImage: "/public/thirdWeek/test7.png" },
    { name: "Вход в панель администратора", input: "Войти в панель администратора", expected: "Откроется панель администратор", resultImage: "/public/thirdWeek/test8.png" },
    { name: "Просмотр всех пользователей", input: "Открыть список пользователей", expected: "Покажется список пользователей", resultImage: "/public/thirdWeek/test9.png" },
    { name: "Просмотр всех товаров", input: "Открыть список товаров", expected: "Покажется список товаров", resultImage: "/public/thirdWeek/test10.png" },
    { name: "Просмотр всех заказов", input: "Открыть список заказов", expected: "Покажется список заказов", resultImage: "/public/thirdWeek/test11.png" },
    { name: "Удаление клиента", input: "Нажатие на кнопку удаление клиента", expected: "Выйдет окно о повторном предупреждении", resultImage: "/public/thirdWeek/test12.png" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 xs:mb-24">
      <h1 className="text-3xl font-bold mb-8">Третья неделя практики</h1>
      <div className="md:grid md:gap-8">
        <TaskCardWithGithub {...mobileAppTask} />
        <InfoCard title="Оценка програмного продукта с точки зрения эффективности использования ресурсов" text="Для системы Компьютерной техники и периферийных устройств, текущая реализация выглядит достаточно эффективной. Все операции выполняются с приемлемой скоростью, данные хрантся и не удаляются, отображение товаров, заказов и клиентов в админ-панели работает корректно." />
        <InfoCard title="Паттерн проектирования" text="В данном проекте я применил паттерн 'Singelton' для БД. Singleton гарантирует, что в приложении будет только один экземпляр объекта для работы с базой данных. Это предотвращает создание множества подключений к базе данных.Поскольку все запросы к базе данных проходят через один экземпляр, легче обеспечить согласованность операций." />
        <InfoCard title="Пути дальнейшей оптимизации" text="В дальнейшем нужно будет оптимизировать запросы к БД, улучшить UI, добавить графики для отображения прибыли за месяц/год." />
        <Card className="w-full transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Данные по тестированию</CardTitle>
          </CardHeader>
          <CardContent>
            <TestDataTable data={testData} />
          </CardContent>
        </Card>
        <InfoCard title="Разработка сайта" text="Сайт разработан на языке TypeScript, используя фреймворк React. В качестве сборщика проекта используется Vite, в качестве пакетного менеджера npm. Библиотека для компонентов - shadcn/ui, стилизация - Tailwind CSS, маршрутизация - React Router, управление состоянием  - TanStack Query, линтинг - ESLint." />
      </div>
    </div>
  );
};

export default Week3;
