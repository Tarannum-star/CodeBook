import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "CodeBook is a modern learning platform where you can easily access high-quality computer science eBooks. It offers a clean and user-friendly interface, curated tech content, and affordable prices. Whether you're learning backend, frontend, or JavaScript fundamentals, CodeBook helps you grow your skills with well-structured digital resources you can trust."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes! You can access your eBooks on mobile. CodeBook is fully responsive, so your eBooks open smoothly on any smartphone or tablet, allowing you to read and learn anywhere, anytime."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Yes, we offer refunds under certain conditions. If you experience issues with your purchase or the eBook doesn’t match the description, you can request a refund within a limited time. Just contact our support team, and we’ll be happy to help."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes, we support international payments. You can purchase eBooks from anywhere in the world using globally accepted payment methods for a smooth and secure checkout experience."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}