import { useState } from 'react';
import styles from './faq.module.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of recipes can I find on Tasoty?",
      answer: "Tasoty offers a diverse range of recipes including breakfast, lunch, dinner, desserts, vegetarian, vegan, gluten-free, and international cuisines. Our collection is constantly growing to cater to all dietary preferences and cooking skill levels."
    },
    {
      question: "How are recipes rated on the platform?",
      answer: "Recipes are rated by our community of users on a scale of 1 to 5 stars. Ratings are based on taste, ease of preparation, accuracy of instructions, and overall satisfaction with the final dish."
    },
    {
      question: "Can I save my favorite recipes?",
      answer: "Yes! Once you create an account, you can save any recipe to your favorites collection for easy access later. Simply click the heart icon on any recipe card or recipe page."
    },
    {
      question: "How is the difficulty level of recipes determined?",
      answer: "Our recipe difficulty levels (Easy, Medium, Hard) are determined by factors including preparation time, cooking techniques required, number of ingredients, and complexity of instructions."
    },
    {
      question: "Can I submit my own recipes?",
      answer: "Absolutely! We welcome recipe submissions from our community. Once you're logged in, you can submit your recipes through the 'Submit Recipe' form. Our team will review it before publishing."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div 
              className={styles.faqQuestion} 
              onClick={() => toggleFaq(index)}
            >
              <h3>{item.question}</h3>
              <span className={styles.faqIcon}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            
            <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.show : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;