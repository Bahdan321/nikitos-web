
import { TaskCardWithCode } from "@/components/TaskCardWithCode";

const Week1 = () => {
  const tasks = [
    {
      title: "1.1 Задача линейного алгоритма",
      description: "Товар подорожал на 20%, а затем подешевел на 15%. Как изменилась исходная цена?",
      screenshot: "/public/firstWeek/firstTask.png",
      code: 'initial_price = float(input("Введите исходную цену товара: ")) # Подорожание на 20%\nincreased = initial_price * 1.20 # Удешевление на 15%\nfinal_price = increased * 0.85 # Расчет изменения цены в процентах\nchange = ((final_price - initial_price) / initial_price) * 100 # Вывод результата\nprint(f"Итоговое изменение цены: {change:.2f}%")',
    },
    {
      title: "1.2 Задача разветвляющегося алгоритма",
      description: "Пользователь вводит два числа и операцию (+, -, *, /). Выведите результат или сообщение об ошибке (деление на ноль)",
      screenshot: "/public/firstWeek/secondTask.png",
      code: 'num1 = float(input("Введите первое число: ")) # Ввод первого числа\nnum2 = float(input("Введите второе число: ")) # Ввод второго числа\noperation = input("Введите операцию (+, -, *, /): ") # Ввод операции\nif operation == "+": # Проверка на сложение\n    result = num1 + num2\nelif operation == "-": # Проверка на вычитание\n    result = num1 - num2\nelif operation == "*": # Проверка на умножение\n    result = num1 * num2\nelif operation == "/": # Проверка на деление\n    if num2 != 0: # Проверка деления на ноль\n        result = num1 / num2\n    else:\n        result = "Ошибка: деление на ноль!"\nelse:\n    result = "Ошибка: неизвестная операция!"\nprint("Результат:", result) # Вывод результата',
    },
    {
      title: "1.3 Задача циклического алгоритма",
      description: "Пирамида из символов. Выведите пирамиду заданной высоты (например, для высоты 3)",
      screenshot: "/public/firstWeek/thirdTask.png",
      code: 'def print_pyramid(height): # Функция для вывода пирамиды\n    """Выводит пирамиду заданной высоты"""\n    for i in range(1, height + 1): # Цикл для каждой строки пирамиды\n        # Пробелы перед звездами\n        print(" " * (height - i), end="") # Вывод пробелов\n        # Звезды\n        print("*" * (2 * i - 1)) # Вывод звезд\ntry: # Начало блока обработки ошибок\n    # Ввод данных с проверкой\n    height = int(input("Введите высоту пирамиды (положительное число): ")) # Ввод высоты\n    # Проверка на положительное число\n    if height <= 0: # Проверка на отрицательное или нулевое значение\n        raise ValueError("Высота должна быть положительным числом!")\n    # Проверка на слишком большую высоту (чтобы не сломать терминал)\n    if height > 50: # Проверка на превышение максимальной высоты\n        raise ValueError("Слишком большая высота! Максимум 50.")\n    # Вывод пирамиды\n    print_pyramid(height) # Вызов функции для вывода пирамиды\nexcept ValueError as e: # Обработка ошибок ввода\n    # Обработка ошибок ввода\n    print(f"Ошибка: {e}") # Вывод сообщения об ошибке\nexcept Exception as e: # Обработка других ошибок\n    # Обработка других непредвиденных ошибок\n    print(f"Произошла непредвиденная ошибка: {e}") # Вывод сообщения о непредвиденной ошибке\nfinally: # Блок, выполняющийся всегда\n    print("\nПрограмма завершена.") # Сообщение о завершении программы',
    },
    {
      title: "1.4 Задача на проектирование классов",
      description: "Создайте класс Encryptor с приватным полем key и публичными методами для шифрования и дешифрования текста.",
      screenshot: "/public/firstWeek/fourthTask.png",
      code: 'from abc import ABC, abstractmethod # Импорт модуля для работы с абстрактными классами\n\nclass Encryptor(ABC): # Абстрактный базовый класс для шифрования\n    """Абстрактный базовый класс для шифрования"""\n    \n    def __init__(self, key): # Инициализация с ключом\n        self._key = key\n    @abstractmethod\n    def encrypt(self, text: str): # Абстрактный метод шифрования\n        pass\n    @abstractmethod\n    def decrypt(self, text: str): # Абстрактный метод дешифрования\n        pass\n    def get_key(self): # Получение ключа\n        return self._key\n    def set_key(self, new_key): # Установка нового ключа\n        self._key = new_key\n\nclass CaesarEncryptor(Encryptor): # Класс для шифра Цезаря\n    """Реализация шифра Цезаря"""\n    def encrypt(self, text: str) -> str: # Метод шифрования текста\n        result = []\n        for char in text: # Обработка каждого символа\n            if char.isalpha(): # Проверка, является ли символ буквой\n                shift = self._key % 26 # Вычисление сдвига\n                if char.islower(): # Обработка строчных букв\n                    new_char = chr(((ord(char) - ord("a") + shift) % 26 + ord("a")))\n                else: # Обработка заглавных букв\n                    new_char = chr(((ord(char) - ord("A") + shift) % 26 + ord("A")))\n                result.append(new_char)\n            else:\n                result.append(char) # Сохранение небуквенных символов\n        return "".join(result) # Возврат зашифрованного текста\n    def decrypt(self, text: str) -> str: # Метод дешифрования текста\n        self._key = -self._key  # Инвертируем ключ для дешифровки\n        decrypted = self.encrypt(text) # Выполняем шифрование с инвертированным ключом\n        self._key = -self._key  # Возвращаем исходный ключ\n        return decrypted # Возврат расшифрованного текста\n\nclass XOREncryptor(Encryptor): # Класс для XOR-шифрования\n    """Реализация XOR-шифрования"""\n    def __init__(self, key: str): # Инициализация с ключом в виде строки\n        super().__init__(key.encode()) # Кодирование ключа в байты\n    def encrypt(self, text: str) -> bytes: # Метод шифрования текста\n        key_bytes = self._key # Получение ключа в байтах\n        text_bytes = text.encode() # Кодирование текста в байты\n        return bytes([text_bytes[i] ^ key_bytes[i % len(key_bytes)] for i in range(len(text_bytes))]) # XOR-операция\n    def decrypt(self, data: bytes) -> str: # Метод дешифрования данных\n        return self.encrypt(data.decode(latin1)).decode(latin1) # Дешифрование через повторное шифрование',
    },
    {
      title: "1.5 Задача с графическим интерфейсом",
      description: "Разработайте приложение для визуализации данных в виде диаграмм и графиков.",
      screenshot: "/public/firstWeek/fiveTask.png",
      code: 'using System; // Подключение основного пространства имен System\nusing System.Data; // Подключение пространства имен для работы с данными\nusing System.IO; // Подключение пространства имен для работы с файлами\nusing System.Windows.Forms; // Подключение пространства имен для Windows Forms\nusing System.Windows.Forms.DataVisualization.Charting; // Подключение пространства имен для визуализации графиков\n\nnamespace DataVisualizationWinForms // Объявление пространства имен приложения\n{\n    public partial class MainForm : Form // Основной класс формы, наследуемый от Form\n    {\n        private DataTable dataTable; // Объявление переменной для хранения таблицы данных\n        public MainForm() // Конструктор формы\n        {\n            InitializeComponent(); // Инициализация компонентов формы\n            InitializeChart(); // Вызов метода инициализации графика\n            SetupUI(); // Вызов метода настройки пользовательского интерфейса\n        }\n        private void InitializeChart() // Метод инициализации графика\n        {\n            chart1.Titles.Add("Визуализация данных"); // Добавление заголовка графика\n            chart1.ChartAreas.Add(new ChartArea("MainArea")); // Добавление области графика\n        }\n        private void SetupUI() // Метод настройки пользовательского интерфейса\n        {\n            // Настройка кнопки загрузки\n            var btnLoad = new Button // Создание кнопки загрузки\n            {\n                Text = "Загрузить данные", // Текст кнопки\n                BackColor = System.Drawing.Color.Green, // Цвет фона кнопки\n                ForeColor = System.Drawing.Color.White, // Цвет текста кнопки\n                Width = 120, // Ширина кнопки\n                Top = 10, // Положение кнопки сверху\n                Left = 10 // Положение кнопки слева\n            };\n            btnLoad.Click += BtnLoad_Click; // Привязка обработчика события нажатия кнопки\n            Controls.Add(btnLoad); // Добавление кнопки на форму\n            // Настройка выпадающего списка\n            var cmbChartType = new ComboBox // Создание выпадающего списка\n            {\n                Width = 150, // Ширина списка\n                DropDownStyle = ComboBoxStyle.DropDownList, // Стиль списка - только выбор\n                Top = 10, // Положение списка сверху\n                Left = 140 // Положение списка слева\n            };\n            cmbChartType.Items.AddRange(new[] { "Линейный", "Столбчатый", "Круговой", "Точечный" }); // Добавление типов графиков в список\n        }\n    }\n}',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 xs:mb-24">
      <h1 className="text-3xl font-bold mb-8">Первая неделя практики</h1>
      <div className="md:grid md:gap-8 md:grid-cols-2">
        {tasks.map((task, index) => (
          <TaskCardWithCode key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Week1;
