const painPoints = [
  {
    emoji: "😰",
    title: "Живу от зарплаты до зарплаты",
    description: "Не понимаю, куда уходят деньги. Кажется, что трачу на ерунду",
  },
  {
    emoji: "😱",
    title: "Боюсь считать долги",
    description: "Кредиты, рассрочки, займы — не знаю, как из этого выбраться",
  },
  {
    emoji: "🤔",
    title: "Хочу инвестировать",
    description: "Но не знаю, сколько можно вложить и не остаться без денег",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-800">
            Узнаёшь себя?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{point.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
