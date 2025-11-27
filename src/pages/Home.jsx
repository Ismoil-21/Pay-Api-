import tel from "../assets/telefon.png";
import homiy from "../assets/homiy.png";
import kodlar from "../assets/kodlar.svg";
import telefon from "../assets/telefon.svg";
import tel_2 from "../assets/2-telefon.png";
import pull from "../assets/pull.svg";
import trading from "../assets/trading.svg";
import card from "../assets/card.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavLink } from "react-router-dom";

const Home = () => {
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
    <div className="font-sans bg-[#F4F7FA] text-[#1b263b]">
      <section className="px-5 py-10 text-center sm:text-center md:text-start justfify-center sm:justify-center md:justify-around items-center sm:max-w-7xl sm:mx-auto sm:px-6 sm:py-20 sm:flex-wrap md:flex">
        <div>
          <h1 className="text-[29px] sm:text-4xl md:text-5xl font-bold text-[#36536B]">
            Start building <br /> with our APIs for <br /> absolutely free.
          </h1>
          <form
            className="flex-wrap sm:flex sm:flex-nowrap mt-6 shadow w-[75%] sm:w-[400px] m-auto rounded-3xl"
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

          <p className="text-[#36536B] my-5 sm:text-sm sm:flex gap-3 sm:items-center sm:justify-center md:justify-start">
            Have any questions?
            <NavLink
              className={
                "text-[#36536B] hover:text-[#36536B] duration-300 text-lg decoration-neutral-900"
              }
              to={"/contact"}
            >
              Contact us
            </NavLink>
          </p>
        </div>

        <img
          className="m-auto sm:m-auto md:m-0 w-[50%] sm:w-[40%] md:w-[200px]"
          width={200}
          src={tel}
          alt=""
        />
      </section> 

      <section className="bg-[#0d1b2a] text-white py-20 px-6">
        <div className="container max-w-[1200px] m-auto flex flex-wrap-reverse sm:flex-wrap-reverse md:flex-nowrap items-center justify-between">
          <div className="sm:mt-20 w-[400px] m-auto sm:m-auto md:m-0 text-center sm:text-center md:text-start mt-10">
            <h2 className="text-2xl sm:text-4xl font-bold ">
              Who we work with
            </h2>
            <p className="max-w-xl mt-4 text-[#bfc9d8]">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API.
            </p>

            <button className="mt-10 px-6 py-3 cursor-pointer rounded-4xl sm:rounded-xl bg-transparent border border-white hover:bg-white hover:text-[#0d1b2a] duration-300">
              <NavLink to={"/about"}>About Us</NavLink>
            </button>
          </div>

          <img className="w-[80%] md:w-[60%] m-auto" src={homiy} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="m-auto md:m-0">
          <img className="" src={kodlar} alt="" />
        </div>
        <div className="text-center sm:text-center md:text-start">
          <h2 className="text-[30px] sm:text-[40px] font-[400px] text-[#36536B]">
            Easy to implement
          </h2>
          <p className="mt-4 text-[#6C8294] max-w-md m-auto sm:m-auto md:m-0">
            Our API comes with just a few lines of code. You’ll be up and <br />
            running in no time. We built our documentation page to <br />
            integrate payments functionality with ease.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="container max-w-[1200px] m-auto">
          <div className="flex-wrap-reverse sm:flex md:flex-nowrap justify-center md:justify-between items-center">
            <div className="text-center sm:text-center md:text-start m-auto md:m-0">
              <h2 className="text-[#36536B] text-[30px] sm:text-[38px] font-[400px]">
                Simple UI & UX
              </h2>
              <p className="mt-4 text-[#6C8294] m-auto sm:m-auto">
                Our pre-built form is easy to integrate in your app or website’s
                <br />
                checkout flow and designed to optimize conversion.
              </p>
            </div>

            <div className="flex justify-end">
              <img
                className="m-auto sm:m-auto md:m-0 w-[50%] sm:w-[50%] md:w-[40%]"
                src={telefon}
                alt=""
              />
              <img
                className="m-auto sm:m-auto md:m-0 w-[50%] sm:w-[50%] md:w-[40%]"
                src={tel_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="container max-w-[1200px] m-auto sm:flex justify-between items-center ">
          <div className="text-center w-[310px] m-auto sm:m-auto md:m-0 ">
            <img className="m-auto w-[30%] sm:w-[40%] md:w-[100px]" src={pull} alt="" />
            <br />
            <span className="text-[20px] text-[#36536B]">Personal Finances</span>
            <p className="text-[#6C8294] mt-4 text-[12px] sm:text-[12px] md:text-[16px] px-5">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>

          <div className="text-center w-[310px] my-8 m-auto sm:m-auto md:m-0">
            <img className="m-auto w-[30%] sm:w-[40%] md:w-[100px]" src={trading} alt="" />
            <br />
            <span className="text-[20px] text-[#36536B]">Banking & Coverage</span>
            <p className="text-[#6C8294] mt-4 text-[12px] sm:text-[12px] md:text-[16px] px-5">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>

          <div className="text-center w-[310px] m-auto sm:m-auto md:m-0">
            <img className="m-auto w-[30%] sm:w-[40%] md:w-[100px]" src={card} alt="" />
            <br />
            <span className="text-[20px] text-[#36536B]">Consumer Payments</span>
            <p className="text-[#6C8294] mt-4 text-[12px] sm:text-[12px] md:text-[16px] px-5">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
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
    </div>
  );
};

export default Home;
