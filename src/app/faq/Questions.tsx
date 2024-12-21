import GradientTitle from "@/components/custom/grad-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function FAQAccordion() {
    return (
        <div className=" text-white mt-44 flex items-center justify-center">
            <div className="flex justify-between">
                <div className="w-1/3">
                    <GradientTitle className="text-6xl leading-tight" text="Frequently asked questions" />
                    <p className="text-neutral-400 mb-8">
                        Get answers to common queries about our Brand & Identity Design course. If you
                        have more questions, feel free to contact us.
                    </p>
                </div>
                <div className="w-1/2">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is brand identity design?</AccordionTrigger>
                            <AccordionContent>
                                Brand identity design involves creating visual and conceptual elements that represent a company or brand.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Who can benefit from this course?</AccordionTrigger>
                            <AccordionContent>
                                This course is ideal for designers, marketers, and business owners looking to establish a strong brand identity.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Are there any prerequisites for the course?</AccordionTrigger>
                            <AccordionContent>
                                No prerequisites are required, but a basic understanding of design principles is helpful.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>How will this course help my marketing efforts?</AccordionTrigger>
                            <AccordionContent>
                                It provides you with the tools and knowledge to create cohesive and impactful brand elements that boost marketing.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>What software/tools will I need?</AccordionTrigger>
                            <AccordionContent>
                                You will need access to design tools like Adobe Illustrator or Figma.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger>Is the course self-paced?</AccordionTrigger>
                            <AccordionContent>
                                Yes, the course is self-paced, allowing you to learn at your own convenience.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger>Will I receive a certificate upon completion?</AccordionTrigger>
                            <AccordionContent>
                                Yes, a certificate of completion will be provided.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                            <AccordionTrigger>How can I enroll in the course?</AccordionTrigger>
                            <AccordionContent>
                                You can enroll by visiting our website and signing up for the course.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-9">
                            <AccordionTrigger>Can I access the course materials after completion?</AccordionTrigger>
                            <AccordionContent>
                                Yes, you will have lifetime access to the course materials.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10">
                            <AccordionTrigger>How can I get in touch for further questions?</AccordionTrigger>
                            <AccordionContent>
                                You can contact us through email or the support section of our website.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
