import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Первый экран - удар в боль + решение */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Зарплата есть,
              <span className="text-blue-400"> а денег нет?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              От финансового хаоса до стабильности и инвестиций — всё в одной
              Google Таблице
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              >
                Получить таблицу за 1990₽
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
              >
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Сильное вовлечение */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-red-800">
              Узнаёшь себя?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Живу от зарплаты до зарплаты
                </h3>
                <p className="text-gray-600">
                  Не понимаю, куда уходят деньги. Кажется, что трачу на ерунду
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">😱</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Боюсь считать долги
                </h3>
                <p className="text-gray-600">
                  Кредиты, рассрочки, займы — не знаю, как из этого выбраться
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Хочу инвестировать
                </h3>
                <p className="text-gray-600">
                  Но не знаю, сколько можно вложить и не остаться без денег
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что это за таблица */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Что это за таблица?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Это не просто «шаблон учёта» — это путь, встроенный прямо в
                  таблицу.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon
                        name="CheckCircle"
                        className="text-blue-600"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Чек-лист ведёт по шагам
                      </h3>
                      <p className="text-gray-600">
                        Каждое действие с пониманием, зачем это нужно
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Icon name="Zap" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Все расчёты автоматизированы
                      </h3>
                      <p className="text-gray-600">
                        Просто вводишь данные, а таблица всё считает сама
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Icon
                        name="TrendingUp"
                        className="text-purple-600"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Полный путь к финансовой свободе
                      </h3>
                      <p className="text-gray-600">
                        От хаоса и долгов до подушки безопасности и инвестиций
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/img/465f2d7f-097a-4d2f-a50c-baffb5fbc34c.jpg"
                  alt="Финансовое планирование"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что внутри */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Что внутри полной версии
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name="AlertTriangle"
                      className="text-red-600"
                      size={24}
                    />
                  </div>
                  <CardTitle>Анализ долгов</CardTitle>
                  <CardDescription>
                    Расчёт ПДН, токсичности кредитов, план выхода из долгов
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="PieChart" className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>Учёт расходов</CardTitle>
                  <CardDescription>
                    Категоризация трат, анализ куда уходят деньги
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" className="text-green-600" size={24} />
                  </div>
                  <CardTitle>Подушка безопасности</CardTitle>
                  <CardDescription>
                    Расчёт нужной суммы и план накопления
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name="TrendingUp"
                      className="text-purple-600"
                      size={24}
                    />
                  </div>
                  <CardTitle>Инвестиции</CardTitle>
                  <CardDescription>
                    Сколько можно вложить без риска для бюджета
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name="Calendar"
                      className="text-orange-600"
                      size={24}
                    />
                  </div>
                  <CardTitle>Бюджет</CardTitle>
                  <CardDescription>
                    Планирование доходов и расходов на месяц
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-teal-600" size={24} />
                  </div>
                  <CardTitle>Цели</CardTitle>
                  <CardDescription>
                    Планирование крупных покупок и накоплений
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Для кого эта таблица?
            </h2>
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Обычные люди с зарплатой
                </h3>
                <p className="text-gray-700 text-lg">
                  Если у вас есть доходы, но денег всё равно не хватает —
                  таблица покажет, куда они уходят и как перестать жить «от
                  аванса до аванса»
                </p>
              </div>
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">
                  Люди с долгами и кредитами
                </h3>
                <p className="text-gray-700 text-lg">
                  Поможет подсчитать реальную долговую нагрузку, оценить
                  токсичность кредитов и составить план выхода — без паники и
                  стыда
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">
                  Начинающие инвесторы
                </h3>
                <p className="text-gray-700 text-lg">
                  Научитесь понимать, сколько можно инвестировать без риска для
                  основного бюджета и как не «слиться» на рынке
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-800">
                  Фрилансеры и самозанятые
                </h3>
                <p className="text-gray-700 text-lg">
                  При нестабильном доходе таблица поможет правильно распределять
                  деньги и не бояться «провалов» в работе
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Визуальные примеры */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Как это выглядит
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/img/aee26551-28d8-4c48-b7c6-d5eaa5c08f65.jpg"
                  alt="Интерфейс таблицы"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                  Простой и понятный интерфейс
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span>Все расчёты происходят автоматически</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span>Наглядные графики и диаграммы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span>Пошаговые инструкции в каждом разделе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span>Работает в любом браузере</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Нужно ли знать Excel или Google Таблицы?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Нет, не нужно. Все формулы уже настроены. Вам нужно только
                  вводить свои данные — всё остальное таблица посчитает сама.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Это разовая покупка или подписка?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Это разовая покупка. Покупаете один раз — пользуетесь всегда.
                  Никаких скрытых платежей или подписок.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Безопасно ли вводить финансовые данные?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Да, абсолютно безопасно. Таблица находится в вашем Google
                  Диске, только у вас есть доступ к данным. Никто кроме вас не
                  может их увидеть.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Подойдёт ли для семейного бюджета?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Да, таблица легко адаптируется под семейный бюджет. Можно
                  вводить доходы и расходы всех членов семьи.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Что если у меня нестабильный доход?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Таблица специально адаптирована для нестабильных доходов. Есть
                  разделы для планирования при переменных заработках.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Гарантии */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-blue-800">
              Гарантии и доверие
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Гарантия возврата
                </h3>
                <p className="text-gray-600">
                  30 дней на тест-драйв. Не подошло — вернём деньги без вопросов
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  5000+ довольных пользователей
                </h3>
                <p className="text-gray-600">
                  Уже помогли тысячам людей навести порядок в финансах
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="LifeBuoy" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Поддержка
                </h3>
                <p className="text-gray-600">
                  Если что-то непонятно — поможем разобраться в Telegram-чате
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Финальный призыв */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Хватит жить от зарплаты до зарплаты
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Начните контролировать свои финансы уже сегодня. Таблица поможет
              вам пройти путь от финансового хаоса до стабильности и роста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1990₽</div>
                <div className="text-sm text-blue-200">Разовый платёж</div>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Получить таблицу сейчас
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>Безопасная оплата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RotateCcw" size={16} />
                <span>Гарантия возврата 30 дней</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
