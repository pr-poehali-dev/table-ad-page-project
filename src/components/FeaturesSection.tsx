import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "AlertTriangle",
    title: "Анализ долгов",
    description: "Расчёт ПДН, токсичности кредитов, план выхода из долгов",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: "PieChart",
    title: "Учёт расходов",
    description: "Категоризация трат, анализ куда уходят деньги",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "Shield",
    title: "Подушка безопасности",
    description: "Расчёт нужной суммы и план накопления",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "TrendingUp",
    title: "Инвестиции",
    description: "Сколько можно вложить без риска для бюджета",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "Calendar",
    title: "Бюджет",
    description: "Планирование доходов и расходов на месяц",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: "Target",
    title: "Цели",
    description: "Планирование крупных покупок и накоплений",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Что внутри полной версии
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={feature.icon}
                      className={feature.iconColor}
                      size={24}
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
