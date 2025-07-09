import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ctaFeatures = [
  {
    icon: "Shield",
    text: "Безопасная оплата",
  },
  {
    icon: "RotateCcw",
    text: "Гарантия возврата 30 дней",
  },
];

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хватит жить от зарплаты до зарплаты
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Начните контролировать свои финансы уже сегодня. Таблица поможет вам
            пройти путь от финансового хаоса до стабильности и роста.
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
            {ctaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon name={feature.icon} size={16} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
