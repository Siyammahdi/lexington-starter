import GradientTitle from "@/components/custom/grad-title";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className=" text-neutral-800 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <GradientTitle className="text-4xl" text="Lets get started!" />
        <p className="text-neutral-500 mb-8">
          Complete the details below so I can process your request and then schedule a time to discuss your goals.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-neutral-200 text-sm font-medium mb-2">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name"
              className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-neutral-200  text-sm font-medium mb-2">
              What is the name of your company / organisation?
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company name"
              className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-neutral-200 text-sm font-medium mb-2">
              How shall we contact you?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
            />
          </div>

          <div>
            <label htmlFor="projectDetails" className="block text-neutral-200 bg-transparent text-sm font-medium mb-2">
              Project details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              placeholder="What are you working on?"
              className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
            />
          </div>

          <Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 w-full'>Submit your request</Button>
        </form>
      </div>
    </div>
  );
}
