import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "CheckCircle",
    title: "Чек-лист ведёт по шагам",
    description: "Каждое действие с пониманием, зачем это нужно",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "Zap",
    title: "Все расчёты автоматизированы",
    description: "Просто вводишь данные, а таблица всё считает сама",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "TrendingUp",
    title: "Полный путь к финансовой свободе",
    description: "От хаоса и долгов до подушки безопасности и инвестиций",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const ProductDescriptionSection = () => {
  return (
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
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${feature.bgColor} p-2 rounded-lg`}>
                      <Icon
                        name={feature.icon}
                        className={feature.iconColor}
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
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
  );
};

export default ProductDescriptionSection;
