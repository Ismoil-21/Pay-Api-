import peoples from "../assets/peoples.png";
import people from "../assets/people2.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const notify = () =>
    toast.success("Ma'lumot yuborldi !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("so'rovni yuborishda xatolik !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <main>
      <section>
        <div className="container max-w-[1200px] m-auto">
          <h1 className="text-[#36536B] text-[36px] sm:text-[45px] md:text-[50px] text-center md:text-start font-serif px-6 my-[5%] ">
            <b>
              We empower innovators <br /> by delivering access to the <br />
              financial system
            </b>
          </h1>

          <div className="w-[90%] m-auto">
            <div className="sm:flex justify-between items-center gap-[20%] text-center md:text-start">
              <span className="text-[#36536B] text-[33px] font-serif w-2xl">
                Our Vision
              </span>
              <p className="text-[#6C8294]">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>

            <div className="sm:flex justify-between items-center gap-[15.7%] my-[5%] text-center md:text-start">
              <span className="text-[#36536B] text-[33px] font-serif w-2xl">
                Our Business
              </span>
              <p className="text-[#6C8294]">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides keys
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </div> 
      </section>

      <section>
        <img className="hidden sm:block w-full my-[8%]" src={peoples} alt="" />
        <img className="block sm:hidden w-full" src={people} alt="" />
      </section>

      <section>
        <div className="container sm:max-w-[1200px] gap-2.5 m-auto sm:flex justify-between px-6 mt-10">
          <hr />
          <div className="sm:border-t sm:border-b sm:border-t-[#36536B] sm:border-b-[#36536B] w-[250px] md:w-[350px] text-center sm:text-start m-auto sm:m-0 mt-10">
            <h3 className="text-[#36536B] my-2">Team Members</h3>
            <h2 className="text-[#BA4270] text-[40px] sm:text-[56px] my-2">
              300+
            </h2>
          </div>

          <div className="sm:border-t sm:border-b sm:border-t-[#36536B] sm:border-b-[#36536B] w-[250px] md:w-[350px] text-center sm:text-start m-auto sm:m-0 mt-6">
            <h3 className="text-[#36536B] my-2">Offices in the US</h3>
            <h2 className="text-[#BA4270] text-[40px] sm:text-[56px] my-2">
              3
            </h2>
          </div>

          <div className="sm:border-t sm:border-b sm:border-t-[#36536B] sm:border-b-[#36536B] w-[250px] md:w-[350px] text-center sm:text-start m-auto sm:m-0 mb-10 mt-6">
            <h3 className="text-[#36536B] my-2">Transactions analyzed</h3>
            <h2 className="text-[#BA4270] text-[40px] sm:text-[56px] my-2">
              10M+
            </h2>
          </div>
          <hr />
        </div>
      </section>

      <section>
        <div className="container max-w-[1200px] m-auto">
          <div className="w-[90%] m-auto mt-[100px]">
            <div className="sm:flex justify-between gap-[20%] md:gap-0 items-center text-center md:text-start">
              <span className="text-[#36536B] text-[33px] font-serif w-2xl">
                Our Business
              </span>
              <p className="text-[#6C8294] w-full md:w-[70%]">
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>

            <div className="sm:flex justify-between gap-[20%] md:gap-0 items-center my-[5%] text-center md:text-start">
              <span className="text-[#36536B] text-[33px] font-serif w-2xl">
                The People
              </span>
              <p className="text-[#6C8294] w-full md:w-[70%]">
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-[1200px] m-auto flex justify-between items-center">
          <div className="w-[1200px] px-6 m-auto text-center md:flex justfify-center md:justify-between sm:items-center mt-15">
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#36536B]">
              Ready to start?
            </span>
            <form
              className="flex-wrap sm:flex sm:flex-nowrap mt-6 shadow w-[75%] sm:w-[400px] m-auto md:m-0 rounded-3xl"
              onSubmit={async (e) => {
                e.preventDefault();

                const email = e.target.email.value.trim();

                if (!email) {
                  notifyError();
                  return;
                } else {
                  notify();
                  e.target.email.value = "";
                }

                await sendToTelegramFront(`📩 Новая заявка\nEmail: ${email}`);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="px-4 py-3 rounded-xl border-none outline-none w-full text-[#36536B]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-3xl bg-[#c44569] text-white shadow w-full cursor-pointer transform hover:scale-105 hover:bg-[#DA6D97] duration-300"
              >
                Schedule a Demo
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
};

export default About;
