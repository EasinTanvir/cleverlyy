import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const faqData = [
  {
    question: "When will Payment occur?",
    answer:
      "Payment will occur as soon as you pay and once you are confirmed, your upgraded plan will start almost immediately.",
  },
  {
    question: "How do I cancel my Subscription?",
    answer:
      'To cancel your subscription, go to your account settings and select the "Cancel Subscription" option.',
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are processed based on the company’s policy. Please check our refund policy page for more information.",
  },
];

function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className=" flex-center mb-20">
        <FaqIcon />
      </div>

      {faqData.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            onClick={() => toggleAccordion(index)}
            className="bg-white cursor-pointer flex justify-between rounded-xl items-center p-4"
          >
            <h3 className="text-lg font-medium">{item.question}</h3>
            {expandedIndex === index ? (
              <AiOutlineUp className="text-xl" />
            ) : (
              <AiOutlineDown className="text-xl" />
            )}
          </div>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;

const FaqIcon = () => {
  return (
    <div className="relative inline-flex items-center">
      <div className="relative border-4 border-black rounded-lg p-2">
        <span className="font-bold text-3xl">FAQ</span>
      </div>
    </div>
  );
};
