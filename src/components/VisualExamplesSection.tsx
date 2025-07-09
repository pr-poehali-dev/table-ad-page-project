import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Check",
    text: "Все расчёты происходят автоматически",
  },
  {
    icon: "Check",
    text: "Наглядные графики и диаграммы",
  },
  {
    icon: "Check",
    text: "Пошаговые инструкции в каждом разделе",
  },
  {
    icon: "Check",
    text: "Работает в любом браузере",
  },
];

const VisualExamplesSection = () => {
  return (
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
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name={benefit.icon}
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualExamplesSection;
