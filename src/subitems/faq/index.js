import { Accordion } from "./accordion"

export const FaqIndex = () => {
  const config = [
    {
      title: "How does purchasing a kitten work?",
      text: "<p>Here are the easy steps:</p><ol><li>1. Let me know which kitten you're interested in.</li><li> 2. Feel free to ask any questions, ask for more pictures or videos, or request paperwork and photos of the parents.</li><li>3. We’ll talk about the details, including possible shipping dates, and then we’ll both sign a contract.</li><li>4. Once the contract is signed, the next step is to send a deposit for the kitten you’ve chosen. This reserves the kitten for you until delivery day. A deposit means the kitten is officially yours and no one else can buy it. We don’t hold kittens without a deposit — without one, the kitten is still available to others.</li><li>5. We accept payment through Zelle, Venmo, PayPal (friends and family), and Paysend. Please keep in mind the deposit is non-refundable if you change your mind.</li><li>6. After the deposit is received, we’ll send you updated pictures and videos about once every 10 days so you can watch your kitten grow!</li><li>7. The remaining balance is paid 3-7 days before the expected delivery date.</li></ol>"
    },
    {
      title: "How does pet delivery work?",
      text: "<p>We’ve been working with a trusted pet delivery company since 2018. Your kitten can be shipped either to your home or to the closest airport to you.</p>"
    },
    {
      title: "What happens to pets during transportation?",
      text: "<p>The delivery company we work with takes great care of the kittens during the trip. They make sure they have fresh water and food, and they also send pictures and videos along the way.</p>"
    },
    {
      title: "What vaccinations or documents do the pets have?",
      text: "<p>All kittens come fully vaccinated, microchipped, and dewormed. You’ll get their vet records, and their pedigree papers will either come with them or be emailed to you shortly after they arrive. We'll also mail you the official pedigree documents with your name listed as the new owner.</p>"
    },
    // {
    //   title: "What happens if the pet arrives sick?",
    //   text: "<p>Before leaving us, each kitten sees a vet to make sure they’re healthy.</p>"
    // },
    // {
    //   title: "",
    //   text: "<p></p><p></p>"
    // },
    // можно добавить больше вопросов
  ]

  return <Accordion config={config} />
}