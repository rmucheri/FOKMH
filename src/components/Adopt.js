import React from "react";

function Adopt() {
  return (
    <div className="w-full mx-auto">
      <section className="ezy__featured11 light py-8 md:py-8 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white w-full">
        <div className="px-4 md:px-8 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center w-full">
            <div className="md:col-span-1 text-center md:text-left">
              <h2 className="text-[25px] md:text-[35px] lg:text-[45px] text-[#3ea498] leading-none font-bold mb-6">
                Adopt a Patient: <br />
                <br /> Transform a Life Today
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-2xl leading-9 text-justify p-4 md:p-12 text-gray-600">
                At Karanda Mission Hospital, every contribution, no matter the
                size, brings hope and healing to those in urgent need of medical
                care. Through our "Adopt a Patient" appeal, your donation helps
                support patients facing life-threatening illnesses like cancer.
                While we’re not asking you to shoulder the full cost of
                treatment, your generosity will go a long way in covering vital
                aspects of care, ensuring that no patient is left behind.
                Together, we can make a meaningful impact—adopt a patient today
                and be the reason someone gets a second chance at life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "fas fa-cannabis",
                title: "Patient Consultation and Diagnostic Tests: $40 USD",
                description:
                  "Help patients receive a thorough medical consultation and essential diagnostic tests to determine their path to recovery.",
              },
              {
                icon: "fas fa-random",
                title: "Biopsy: $70 USD",
                description:
                  "Fund this critical procedure that helps detect cancer and guide effective treatment plans for those in need.",
              },
              {
                icon: "fas fa-camera",
                title: "Medicines: $10 USD",
                description:
                  "Provide essential medications to alleviate pain and manage symptoms for patients on their healing journey.",
              },
              {
                icon: "fas fa-cannabis",
                title: "Inpatient Bed (One Night): $10 USD",
                description:
                  "Ensure a safe and comfortable stay for patients receiving life-saving treatment at the hospital.",
              },
              {
                icon: "fas fa-poll",
                title: "Cycle of Chemotherapy for a Cancer Patient: $150 USD",
                description:
                  "Give a cancer patient a fighting chance with a complete cycle of chemotherapy treatment.",
              },
              {
                icon: "fas fa-pencil-ruler",
                title:
                  "Major Cancer Operation (Hysterectomy/Mastectomy): $700 USD",
                description:
                  "Cover the cost of life-changing surgeries that can save patients from advanced stages of cancer.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white dark:bg-[#1E2735] shadow dark:shadow-none flex flex-col p-6 h-full"
              >
                <div className="w-12 min-w-[50px] h-12 min-h-[50px] bg-[#51cbd0] text-white rounded-full text-xl inline-flex items-center justify-center shadow dark:shadow-none mb-4">
                  <i className={item.icon} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold mb-4 text-[#3ea498]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adopt;
