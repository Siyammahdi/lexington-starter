import GradientTitle from "@/components/custom/grad-title";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    companyName: Yup.string().required("Company name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    projectDetails: Yup.string().required("Project details are required."),
  });

  const initialValues = {
    firstName: "",
    companyName: "",
    email: "",
    projectDetails: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted with values:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="text-neutral-800 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <GradientTitle className="text-4xl" text="Lets get started!" />
        <p className="text-neutral-500 mb-8">
          Complete the details below so I can process your request and then schedule a time to discuss your goals.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-neutral-200 text-sm font-medium mb-2"
                >
                  First name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your name"
                  className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-neutral-200 text-sm font-medium mb-2"
                >
                  What is the name of your company / organisation?
                </label>
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company name"
                  className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-200 text-sm font-medium mb-2"
                >
                  How shall we contact you?
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-neutral-200 text-sm font-medium mb-2"
                >
                  Project details
                </label>
                <Field
                  as="textarea"
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="What are you working on?"
                  className="w-full mt-1 p-2 border border-neutral-800 bg-transparent text-neutral-800 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
                />
                <ErrorMessage
                  name="projectDetails"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit your request"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
