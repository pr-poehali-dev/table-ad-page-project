const audienceSegments = [
  {
    title: "Обычные люди с зарплатой",
    description:
      "Если у вас есть доходы, но денег всё равно не хватает — таблица покажет, куда они уходят и как перестать жить «от аванса до аванса»",
    bgColor: "bg-blue-50",
    titleColor: "text-blue-800",
  },
  {
    title: "Люди с долгами и кредитами",
    description:
      "Поможет подсчитать реальную долговую нагрузку, оценить токсичность кредитов и составить план выхода — без паники и стыда",
    bgColor: "bg-red-50",
    titleColor: "text-red-800",
  },
  {
    title: "Начинающие инвесторы",
    description:
      "Научитесь понимать, сколько можно инвестировать без риска для основного бюджета и как не «слиться» на рынке",
    bgColor: "bg-green-50",
    titleColor: "text-green-800",
  },
  {
    title: "Фрилансеры и самозанятые",
    description:
      "При нестабильном доходе таблица поможет правильно распределять деньги и не бояться «провалов» в работе",
    bgColor: "bg-purple-50",
    titleColor: "text-purple-800",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Для кого эта таблица?
          </h2>
          <div className="space-y-8">
            {audienceSegments.map((segment, index) => (
              <div key={index} className={`${segment.bgColor} p-8 rounded-lg`}>
                <h3
                  className={`text-2xl font-semibold mb-4 ${segment.titleColor}`}
                >
                  {segment.title}
                </h3>
                <p className="text-gray-700 text-lg">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
