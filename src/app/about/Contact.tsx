import GradientTitle from "@/components/custom/grad-title";
import React from "react";

const Contact = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto md:px-6 lg:px-12">
        {/* Title */}
        <GradientTitle className="text-4xl mb-20" text="Contact Us" />

        {/* Locations */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl  mb-3">Los Angeles</h3>
            <p className="text-neutral-400 md:text-sm">
              4556 Brendan Ferry
              <br />
              Los Angeles, CA 90210
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">New York</h3>
            <p className="text-neutral-400 text-sm">
              886 Walter Street
              <br />
              New York, NY 12345
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">Toronto</h3>
            <p className="text-neutral-400 text-sm">
              7363 Cynthia Pass
              <br />
              Toronto, ON N3Y 4H8
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">London</h3>
            <p className="text-neutral-400 text-sm">
              114 Cobble Lane
              <br />
              London N1 2EF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
