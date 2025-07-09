import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Нужно ли знать Excel или Google Таблицы?",
    answer:
      "Нет, не нужно. Все формулы уже настроены. Вам нужно только вводить свои данные — всё остальное таблица посчитает сама.",
  },
  {
    id: "item-2",
    question: "Это разовая покупка или подписка?",
    answer:
      "Это разовая покупка. Покупаете один раз — пользуетесь всегда. Никаких скрытых платежей или подписок.",
  },
  {
    id: "item-3",
    question: "Безопасно ли вводить финансовые данные?",
    answer:
      "Да, абсолютно безопасно. Таблица находится в вашем Google Диске, только у вас есть доступ к данным. Никто кроме вас не может их увидеть.",
  },
  {
    id: "item-4",
    question: "Подойдёт ли для семейного бюджета?",
    answer:
      "Да, таблица легко адаптируется под семейный бюджет. Можно вводить доходы и расходы всех членов семьи.",
  },
  {
    id: "item-5",
    question: "Что если у меня нестабильный доход?",
    answer:
      "Таблица специально адаптирована для нестабильных доходов. Есть разделы для планирования при переменных заработках.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
