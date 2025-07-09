import Icon from "@/components/ui/icon";

const guarantees = [
  {
    icon: "Shield",
    title: "Гарантия возврата",
    description:
      "30 дней на тест-драйв. Не подошло — вернём деньги без вопросов",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "Users",
    title: "5000+ довольных пользователей",
    description: "Уже помогли тысячам людей навести порядок в финансах",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: "LifeBuoy",
    title: "Поддержка",
    description: "Если что-то непонятно — поможем разобраться в Telegram-чате",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const GuaranteesSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-800">
            Гарантии и доверие
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div
                  className={`${guarantee.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={guarantee.icon}
                    className={guarantee.iconColor}
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
