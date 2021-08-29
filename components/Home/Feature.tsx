import Image from "next/image";

import Feedback from "@public/Feedback.png";
import ReportBugs from "@public/ReportBugs.png";
import FeatureRequest from "@public/FeatureRequest.png";
import FAQ from "@public/FAQ.png";
import ContactUs from "@public/ContactUs.png";
import Dashboard from "@public/Dashboard.png";
import PWA from "@public/PWA.png";

const Features = () => {
  return (
    <div className="py-12" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-20">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Chatbotish has a lot of amazing features to offer
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mx-auto">
                <Image
                  src={Feedback}
                  alt="Add Anonymous feedback form to your website in seconds!"
                  layout="fixed"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  Add Anonymous feedback form to your website in seconds!
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  The biggest advantage of anonymous feedback is that responses
                  tend to be more honest; when someone has to identify
                  themselves, they may have a tendency to hold back for fear of
                  damaging a relationship or making themselves look bad.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  Bug Reports
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  Often when a user encounters a bug in your application they
                  may not know how to create an issue on github. With the help
                  of Chatbotish you can add a simple form for reporting bugs!
                </p>
              </div>
              <div className="mx-auto row-start-1 row-end-1 md:row-start-auto md:row-end-auto">
                <Image src={ReportBugs} alt="Bug Reports" layout="fixed" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mx-auto">
                <Image
                  src={FeatureRequest}
                  alt="Listen to your customers need"
                  layout="fixed"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  Listen to your customers need
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  Quite often there would be times when users wished a
                  particular feature was present in the application but have no
                  idea where they should ask for it. With the help of Chatbotish
                  you can add a simple form for accepting feature requests!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  Contact
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  For simple one page application, for users to contact you, you
                  would have to create a separate contact page. With the help of
                  Chatbotish you can add a simple page in the widget for
                  displaying contact details!
                </p>
              </div>
              <div className="mx-auto row-start-1 row-end-1 md:row-start-auto md:row-end-auto">
                <Image src={ContactUs} alt="Contact" layout="fixed" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mx-auto">
                <Image src={FAQ} alt="FAQ" layout="fixed" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  FAQ Section
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  Tired of giving the same answer to users asking same question
                  over-and-over again? Add an FAQ section in minutes for your
                  website with the help of Chatbotish!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  Amazing Dashboard
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  Manage different projects, view installation steps for
                  different web apps and view responses for different forms in
                  the dashboard
                </p>
              </div>
              <div className="mx-auto row-start-1 row-end-1 md:row-start-auto md:row-end-auto">
                <Image
                  src={Dashboard}
                  alt="Dashboard"
                  layout="fixed"
                  objectFit="cover"
                  objectPosition="left"
                  width={window?.innerWidth < 768 ? 280 : 400}
                  height={window?.innerWidth < 768 ? 280 : 400}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mx-auto">
                <Image
                  src={PWA}
                  alt="PWA"
                  layout="fixed"
                  objectFit="cover"
                  width={window?.innerWidth < 768 ? 280 : 400}
                  height={window?.innerWidth < 768 ? 280 : 400}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold">
                  It&#39;s a Progressive Web App!
                </h2>
                <p className="text-lg text-center md:text-left md:text-xl mt-4">
                  It&#39;s a PWA, it means that you can install the web app into
                  you phone/tab/desktop and use it to view reported bugs,
                  feature requests and much more!
                </p>
              </div>
            </div>
          </div>
          {/*  row-start-1 row-end-1 */}
        </div>
      </div>
    </div>
  );
};

export default Features;
