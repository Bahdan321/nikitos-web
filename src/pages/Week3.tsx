
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";
import { TestDataTable } from "@/components/TestDataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCard } from "@/components/InfoCard"; // Добавляем импорт

const Week3 = () => {
  const mobileAppTask = {
    title: "Мобильное приложение",
    description: "Разработка мобильного приложения",
    githubLink: "https://github.com/fdfdfdfdfddf/PraktikaAIS",
    screenshots: ["/public/thirdWeek/1.jpeg", "/public/thirdWeek/2.jpeg", "/public/thirdWeek/3.jpeg", "/public/thirdWeek/4.jpeg", "/public/thirdWeek/5.jpeg", "/public/thirdWeek/6.jpeg", "/public/thirdWeek/7.jpeg", "/public/thirdWeek/8.jpeg", "/public/thirdWeek/9.jpeg", "/public/thirdWeek/10.jpeg", "/public/thirdWeek/11.jpeg", "/public/thirdWeek/12.jpeg", "/public/thirdWeek/13.jpeg", "/public/thirdWeek/14.jpeg", "/public/thirdWeek/15.jpeg", "/public/thirdWeek/16.jpeg"],
  };

  const testData = [
    { name: "Зарегистрировать нового пользователя", input: "Валидная почта, валидный логин, валидный пароль", expected: "Запись о пользователе добавлена", resultImage: "/public/thirdWeek/test1.png" },
    { name: "Зарегистрировать нового пользователя", input: "Невалидная почта, валидный логин, валидный пароль", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test2.png" },
    { name: "Войти в систему под пользователем", input: "Данные от существующего аккаунта", expected: "Успешный вход в аккаунт", resultImage: "/public/thirdWeek/test3.png" },
    { name: "Войти в систему под пользователем", input: "Данные от не существующего аккаунта", expected: "Вывод об ошибке", resultImage: "/public/thirdWeek/test4.png" },
    { name: "Создать товар", input: "Ввести данные о товаре", expected: "Запись о товаре добавлена", resultImage: "/public/thirdWeek/test5.png" },
    { name: "Проверка покупки товара", input: "Дождаться покупки товара", expected: "Уведомление о покупке", resultImage: "/public/thirdWeek/test6.png" },
    { name: "Кнопка 'Рейтинг пользователей'", input: "Нажатая кнопка 'Рейтинг пользователей'", expected: "Переключение на вкладку 'Рейтинг пользователей'", resultImage: "/public/thirdWeek/test7.png" },
    { name: "Кнопка 'История продаж'", input: "Нажатая кнопка 'История продаж'", expected: "Переключение на вкладку 'История продаж'", resultImage: "/public/thirdWeek/test8.png" },
    { name: "Войти в систему под администратором", input: "Данные от аккаунта администратора", expected: "Успешный вход в аккаунт администратора", resultImage: "/public/thirdWeek/test9.png" },
    { name: "Проверка удаления пользователя администратором", input: "Нажать на красную кнопку в колонке 'действия'", expected: "Вывод всплывающего окна с подтверждением. После подтверждения - удаление пользователя", resultImage: "/public/thirdWeek/test10.png" },
    { name: "Кнопка 'Комплектующие'", input: "Нажатая кнопка 'Комплектующие'", expected: "Переключение на вкладку 'Комплектующие'", resultImage: "/public/thirdWeek/test11.png" },
    { name: "Проверка удаления комплектующего администратором", input: "Нажать на красную кнопку в колонке 'действия'", expected: "Вывод всплывающего окна с подтверждением. После подтверждения - удаление комплектующего", resultImage: "/public/thirdWeek/test12.png" },
    { name: "Кнопка 'Продажи'", input: "Нажатая кнопка 'Продажи'", expected: "Переключение на вкладку 'Продажи'", resultImage: "/public/thirdWeek/test13.png" },
    { name: "Проверка удаления продажи администратором", input: "Нажать на красную кнопку в колонке 'действия'", expected: "Вывод всплывающего окна с подтверждением. После подтверждения - удаление продажи", resultImage: "/public/thirdWeek/test14.png" },
    { name: "Выход с аккаунта", input: "Нажатая кнопка 'Выйти'", expected: "Переключение на экран авторизации", resultImage: "/public/thirdWeek/test15.png" },
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
