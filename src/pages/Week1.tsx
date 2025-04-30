
import { TaskCardWithCode } from "@/components/TaskCardWithCode";

const Week1 = () => {
  const tasks = [
    {
      title: "1.1 Задача линейного алгоритма",
      description: "Два программиста вместе пишут код за 8 часов. Первый делает это на 12 часов быстрее второго. За сколько часов каждый напишет код отдельно?",
      screenshot: "/public/firstWeek/firstTask.png",
      code: 'def solve_coding_time():\n    a, b, c = 1, -28, 96\n    discriminant = b**2 - 4*a*c\n    y1 = (-b + discriminant**0.5) / (2*a)\n    y2 = (-b - discriminant**0.5) / (2*a)\n    y = y1 if y1 > 12 else y2\n    x = y - 12\n    return x, y\nx, y = solve_coding_time()\nprint(f"Первый программист: {x} часов")\nprint(f"Второй программист: {y} часов")',
    },
    {
      title: "1.2 Задача разветвляющегося алгоритма",
      description: 'Проверка PIN-кода. PIN должен состоять ровно из 4 или 6 цифр. Выведите "Valid" или "Invalid" (например, "1234" → Valid, "a234" → Invalid).',
      screenshot: "/public/firstWeek/secondTask.png",
      code: 'def check_pin(pin):\n    if len(pin) != 4 and len(pin) != 6:\n        return "Invalid"\n    if not pin.isdigit():\n        return "Invalid"\n    return "Valid"\npin = input("Введите PIN-код: ")\nprint(check_pin(pin))',
    },
    {
      title: "1.3 Задача циклического алгоритма",
      description: "Арифметическая прогрессия. Выведите последовательность: начальное число A, шаг D, количество элементов N.",
      screenshot: "/public/firstWeek/thirdTask.png",
      code: 'def arithmetic_progression(a, d, n):\n    result = []\n    for i in range(n):\n        result.append(a + i * d)\n    return result\na = int(input("Введите начальное число A: "))\nd = int(input("Введите шаг D: "))\nn = int(input("Введите количество элементов N: "))\nsequence = arithmetic_progression(a, d, n)\nprint("Арифметическая прогрессия:", *sequence)',
    },
    {
      title: "1.4 Задача на проектирование классов",
      description: 'Класс "Магазин". Разработайте класс Store для управления товарами. Добавьте методы для добавления, удаления и обновления товаров.',
      screenshot: "/public/firstWeek/fourthTask.png",
      code: 'class Store:\n    def __init__(self):\n        self.inventory = {}\n    def add_product(self, product_id, name, price, quantity):\n        if product_id in self.inventory:\n            return "Товар с таким ID уже существует"\n        self.inventory[product_id] = {"name": name, "price": price, "quantity": quantity}\n        return "Товар успешно добавлен"\n    def remove_product(self, product_id):\n        if product_id not in self.inventory:\n            return "Товар с таким ID не найден"\n        del self.inventory[product_id]\n        return "Товар успешно удалён"\n    def update_product(self, product_id, name=None, price=None, quantity=None):\n        if product_id not in self.inventory:\n            return "Товар с таким ID не найден"\n        if name is not None:\n            self.inventory[product_id]["name"] = name\n        if price is not None:\n            self.inventory[product_id]["price"] = price\n        if quantity is not None:\n            self.inventory[product_id]["quantity"] = quantity\n        return "Товар успешно обновлён"\n    def get_inventory(self):\n        return self.inventory\nstore = Store()\nprint(store.add_product(1, "Яблоки", 0.5, 100))\nprint(store.add_product(2, "Бананы", 0.8, 50))\nprint(store.update_product(1, quantity=150))\nprint(store.remove_product(2))\nprint(store.get_inventory())',
    },
    {
      title: "1.5 Задача с графическим интерфейсом",
      description: "Онлайн-магазин. Разработайте приложение для онлайн-магазина с графическим интерфейсом.",
      screenshot: "/public/firstWeek/fiveTask.png",
      code: 'import flet as ft\nclass StoreApp:\n    def __init__(self, page: ft.Page):\n        self.page = page\n        self.page.title = "Онлайн-магазин"\n        self.cart = []\n        self.products = [\n            {"id": 1, "name": "Яблоки", "price": 0.5, "quantity": 100},\n            {"id": 2, "name": "Бананы", "price": 0.8, "quantity": 50},\n            {"id": 3, "name": "Апельсины", "price": 0.6, "quantity": 80},\n        ]\n        self.setup_ui()\n    def setup_ui(self):\n        self.page.views.clear()\n        self.page.views.append(\n            ft.View(\n                route="/catalog",\n                controls=[\n                    ft.AppBar(title=ft.Text("Каталог товаров"), bgcolor=ft.colors.BLUE_200),\n                    ft.Column(\n                        controls=[self.create_product_card(product) for product in self.products],\n                        scroll=ft.ScrollMode.AUTO,\n                        expand=True,\n                    ),\n                    ft.ElevatedButton("Перейти в корзину", on_click=self.go_to_cart),\n                ]\n            )\n        )\n        self.page.update()\n    def create_product_card(self, product):\n        return ft.Card(\n            content=ft.Container(\n                content=ft.Column(\n                    [\n                        ft.Text(product["name"], size=20, weight=ft.FontWeight.BOLD),\n                        ft.Text(f"Цена: ${product["price"]:.2f}"),\n                        ft.Text(f"В наличии: {product["quantity"]}"),\n                        ft.ElevatedButton(\n                            "Купить",\n                            on_click=lambda e: self.add_to_cart(product),\n                            bgcolor=ft.colors.GREEN_200,\n                        ),\n                    ],\n                    alignment=ft.MainAxisAlignment.CENTER,\n                ),\n                padding=10,\n            ),\n            elevation=5,\n        )\n    def add_to_cart(self, product):\n        for item in self.cart:\n            if item["id"] == product["id"]:\n                if item["quantity"] < product["quantity"]:\n                    item["quantity"] += 1\n                return\n        self.cart.append({"id": product["id"], "name": product["name"], "price": product["price"], "quantity": 1})\n        self.page.snack_bar = ft.SnackBar(ft.Text(f"{product["name"]} добавлен в корзину!"))\n        self.page.snack_bar.open = True\n        self.page.update()\n    def go_to_cart(self, e):\n        self.page.views.append(\n            ft.View(\n                route="/cart",\n                controls=[\n                    ft.AppBar(title=ft.Text("Корзина"), bgcolor=ft.colors.BLUE_200),\n                    ft.Column(\n                        controls=self.create_cart_items(),\n                        scroll=ft.ScrollMode.AUTO,\n                        expand=True,\n                    ),\n                    ft.ElevatedButton("Оформить заказ", on_click=self.checkout, bgcolor=ft.colors.ORANGE_200),\n                    ft.ElevatedButton("Вернуться в каталог", on_click=self.go_to_catalog),\n                ]\n            )\n        )\n        self.page.go("/cart")\n    def create_cart_items(self):\n        if not self.cart:\n            return [ft.Text("Корзина пуста", size=20)]\n        return [\n            ft.Card(\n                content=ft.Container(\n                    content=ft.Row(\n                        [\n                            ft.Text(f"{item["name"]} (x{item["quantity"]})", size=16),\n                            ft.Text(f"${item["price"] * item["quantity"]:.2f}", size=16),\n                        ],\n                        alignment=ft.MainAxisAlignment.SPACE_BETWEEN,\n                    ),\n                    padding=10,\n                ),\n                elevation=3,\n            )\n            for item in self.cart\n        ]\n    def checkout(self, e):\n        if not self.cart:\n            self.page.snack_bar = ft.SnackBar(ft.Text("Корзина пуста!"))\n            self.page.snack_bar.open = True\n            self.page.update()\n            return\n        self.cart.clear()\n        self.page.snack_bar = ft.SnackBar(ft.Text("Заказ успешно оформлен!"))\n        self.page.snack_bar.open = True\n        self.page.views.pop()\n        self.go_to_cart(None)\n    def go_to_catalog(self, e):\n        self.page.views.pop()\n        self.page.go("/catalog")\ndef main(page: ft.Page):\n    StoreApp(page)\nft.app(target=main)',
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
