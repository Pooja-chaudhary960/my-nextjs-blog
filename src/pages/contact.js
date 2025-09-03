
import Button from "../components/Button/Button";

export default function Contact() {
  return (
    <div>
      <main className="p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </main>
    </div>
  );
}
