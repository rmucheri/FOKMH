import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  CursorArrowRippleIcon,
  FilmIcon,
  LightBulbIcon,
  SquaresPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { tranlogo2 } from "../assets";

const aboutList = [
  {
    name: "About Us",
    description: "Get to know Friends of Karanda",
    href: "about",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Mission & Vision",
    description: "What we aspire to acheive",
    href: "https://www.friendsofkaranda.com/about#mission-vision",
    icon: LightBulbIcon,
  },
  {
    name: "Our Team",
    description: "Meet our Dedicated leadership team ",
    href: "https://www.friendsofkaranda.com/about#team",
    icon: UsersIcon,
  },
  {
    name: "Core Values",
    description: "What drives us",
    href: "https://www.friendsofkaranda.com/about#values",
    icon: SquaresPlusIcon,
  },
  {
    name: "Gallery",
    description: "Check out our media center",
    href: "https://www.friendsofkaranda.com/about#gallery",
    icon: FilmIcon,
  },
];

const callsToAction = [
  {
    name: "Donate",
    href: "https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital",
    icon: ArrowRightIcon,
  },
  { name: "Contact Us", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Add a handler function
  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-[#ffd832] shadow-sm">
      <nav
        className="w-full max-w-7xl mx-auto flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 hover:scale-105 ">
          <a href="/" className="">
            <span className="sr-only">Friends of Karanda</span>
            <img className="h-16 z-99 w-auto" src={tranlogo2} alt="" />
            <a
              style={{ fontSize: "1.1rem" }}
              href="/"
              className="text-[#3ea498] text-xl font-semibold leading-6"
            >
              FOKMH
            </a>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Here */}

          <a
            href="/"
            className="text-xl text-[#3ea498] font-semibold leading-6  hover:scale-125 "
          >
            Home
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-[#3ea498] hover:scale-125 ">
              About Us
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {aboutList.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="/causes"
            className="text-xl font-semibold leading-6 text-[#3ea498] hover:scale-125 "
          >
            Causes
          </a>
          <a
            href="/contact"
            className="text-xl font-semibold leading-6 text-[#3ea498] hover:scale-125 "
          >
            Contact Us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end hover:scale-110 ">
          <a
            href="#"
            onClick={handleDonateClick}
            className="text-xl font-semibold leading-6 text-orange-800"
          >
            Donate Now! <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">FOKMH</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...aboutList, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/FAQs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQs
                </a>
                <a
                  href="/causes"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Causes
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setShowModal(true);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Donate Now!
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {" "}
              <h2 className="text-2xl font-bold mb-4 text-[#3ea498] text-center">
                Choose Donation Region
              </h2>
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                target="_blank"
                href="https://give.team.org/give/672997/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                USA Donations
              </a>
              <a
                target="_blank"
                href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                Canada Donations
              </a>
              <a
                target="_blank"
                href="https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital"
                className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-white rounded-lg bg-[#3ea498] hover:bg-orange-800"
              >
                International Donations
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-xl text-red-600 hover:text-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
