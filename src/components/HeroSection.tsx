import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
