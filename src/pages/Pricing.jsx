import ptichka from "../assets/ptichka.png";

import { NavLink } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pricing = () => {
  const notify = () =>
    toast.success("Ma'lumot yuborldi !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
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

  async function sendToTelegramFront(message) {
    const botToken = "6836941970:AAFOM-rw8XTBoFE9Vpy6c8bl4IEorOCZASA";
    const chatId = 5520835955;

    if (!botToken || !chatId) {
      console.error("No credentials");
      return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  }
  return (
    <main className={"px-5"}>
      <section>
        <div className="container max-w-[1200px] m-auto">
          <h1 className="text-[#36536B] text-center sm:text-center md:text-start text-[40px] sm:text-[50px] font-serif font-[600px] my-10">
            Pricing
          </h1>

          <div className="sm:flex sm:justify-around sm:items-center gap-10">
            <div className="text-center m-auto sm:m-0 sm:text-start">
              <h2 className="text-[#BA4270] text-[25px] md:text-[32px] font-serif mb-2.5 text-center md:text-start">
                Free Plan
              </h2>
              <p className="text-[#6C8294] m-auto sm:m-0 hidden sm:block text-center md:text-start text-[12px] md:text-[16px]">
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h2 className="text-[#36536B] text-center md:text-start text-[30px] md:text-[40px]">$0.00</h2>

              <div className="border-y border-[#6C8294] flex flex-col gap-2 py-5 px-5 w-[250px] sm:w-full m-auto sm:m-0">
                <div className="m-auto sm:m-0 sm:flex sm:flex-col sm:gap-2">
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Transactions
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Auth
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Identity
                  </span>
                </div>

                <div className="m-auto sm:m-0 ml-[36.5%] sm:ml-[33px]">
                  <span className="text-[#36536B] flex items-center gap-5 pb-1">
                    Investments
                  </span>
                  <span className="text-[#36536B] flex items-center gap-5 py-1">
                    Assets
                  </span>
                  <span className="text-[#36536B] flex items-center gap-5 py-1">
                    Liabilities
                  </span>
                  <span className="text-[#36536B] flex items-center gap-5 pt-1">
                    Income
                  </span>
                </div>
              </div>
              <NavLink to="/contact">
                <button className="text-[#36536B] mt-5 border border-[#36536B] py-2 px-4 rounded-3xl shadow cursor-pointer transform hover:scale-105 hover:bg-[#36536B] hover:text-[white] duration-300">
                  Request Access
                </button>
              </NavLink>
            </div>

            <div className="text-center m-auto sm:m-0 sm:text-start my-10">
              <h2 className="text-[#BA4270] text-[25px] md:text-[32px] font-serif mb-2.5 text-center md:text-start">
                Basic Plan
              </h2>
              <p className="text-[#6C8294] hidden sm:block text-center md:text-start text-[12px] md:text-[16px]">
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h2 className="text-[#36536B] text-center md:text-start text-[30px] md:text-[40px]">$249.00</h2>

              <div className="border-y border-[#6C8294] flex flex-col gap-2 py-5 px-5 w-[250px] sm:w-full m-auto sm:m-0">
                <div className="m-auto sm:m-0 sm:flex sm:flex-col sm:gap-2">
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Transactions
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Auth
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Identity
                  </span>

                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Investments
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Assets
                  </span>
                </div>

                <div className="m-auto sm:m-0 ml-[36.5%] sm:ml-[33px]">
                  <span className="text-[#36536B] flex items-center gap-5 pb-1">
                    Liabilities
                  </span>
                  <span className="text-[#36536B] flex items-center gap-5 pt-1">
                    Income
                  </span>
                </div>
              </div>
              <NavLink to="/contact">
                <button className="text-[#36536B] mt-5 border border-[#36536B] py-2 px-4 rounded-3xl shadow cursor-pointer transform hover:scale-105 hover:bg-[#36536B] hover:text-[white] duration-300">
                  Request Access
                </button>
              </NavLink>
            </div>

            <div className="text-center m-auto sm:m-0 sm:text-start my-10">
              <h2 className="text-[#BA4270] text-[25px] md:text-[32px] font-serif mb-2.5 text-center md:text-start">
                Premium Plan
              </h2>
              <p className="text-[#6C8294] hidden sm:block text-center md:text-start text-[12px] md:text-[16px]">
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h2 className="text-[#36536B] text-center md:text-start text-[30px] md:text-[40px]">$499.00</h2>

              <div className="border-y border-[#6C8294] flex flex-col gap-2 py-5 px-5 w-[250px] sm:w-full m-auto sm:m-0">
                <div className="m-auto sm:m-0 sm:flex sm:flex-col sm:gap-2">
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Transactions
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Auth
                  </span>
                  <span className="flex items-center gap-5">
                    <img src={ptichka} alt="" /> Identity
                  </span>
                  <span className=" flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Investments
                  </span>
                  <span className=" flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Assets
                  </span>
                  <span className=" flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Liabilities
                  </span>
                  <span className=" flex items-center gap-5">
                    <img src={ptichka} alt="" />
                    Income
                  </span>
                </div>
              </div>
              <NavLink to="/contact">
                <button className="text-[#36536B] mt-5 border border-[#36536B] py-2 px-4 rounded-3xl shadow cursor-pointer transform hover:scale-105 hover:bg-[#36536B] hover:text-[white] duration-300">
                  Request Access
                </button>
              </NavLink>
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

export default Pricing;
