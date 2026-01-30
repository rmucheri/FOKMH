import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    description: "What we aspire to achieve",
    href: "https://www.friendsofkaranda.com/about#mission-vision",
    icon: LightBulbIcon,
  },
  {
    name: "Our Team",
    description: "Meet our Dedicated leadership team",
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

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-2"
        aria-label="Global"
      >
        {/* Logo */}
        <motion.div
          className="flex lg:flex-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a href="/" className="flex items-center gap-3">
            <span className="sr-only">Friends of Karanda</span>
            <motion.img
              className="h-12 w-auto"
              src={tranlogo2}
              alt="FOKMH Logo"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-2xl font-bold text-[#3ea498]">FOKMH</span>
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100/80 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          <motion.a
            href="/"
            className="text-lg font-semibold text-gray-800 hover:text-cyan-600 transition-colors duration-300 relative"
            whileHover={{ scale: 1.05 }}
          >
            Home
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-800 hover:text-cyan-600 transition-colors duration-300">
              About Us
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 transition-transform group-hover:rotate-180"
                aria-hidden="true"
              />
            </PopoverButton>

            <AnimatePresence>
              <PopoverPanel
                as={motion.div}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-gray-900/10"
              >
                <div className="p-4">
                  {aboutList.map((item) => (
                    <motion.div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-2xl p-4 text-sm leading-6 hover:bg-gray-50/80 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 group-hover:from-cyan-200 group-hover:to-teal-200 transition-colors">
                        <item.icon
                          className="h-6 w-6 text-cyan-600 group-hover:text-cyan-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 hover:text-cyan-600 transition-colors"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-50/80 backdrop-blur">
                  {callsToAction.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold text-gray-900 hover:bg-cyan-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </PopoverPanel>
            </AnimatePresence>
          </Popover>

          <motion.a
            href="/causes"
            className="text-lg font-semibold text-gray-800 hover:text-cyan-600 transition-colors duration-300 relative"
            whileHover={{ scale: 1.05 }}
          >
            Causes
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="/contact"
            className="text-lg font-semibold text-gray-800 hover:text-cyan-600 transition-colors duration-300 relative"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </PopoverGroup>

        {/* Donate Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="#"
            onClick={handleDonateClick}
            className="modern-button text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now!
            <ArrowRightIcon className="h-5 w-5" />
          </motion.a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <motion.div
              className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <DialogPanel
              as={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white/95 backdrop-blur-md px-6 py-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">FOKMH</span>
                  <img className="h-8 w-auto" src={tranlogo2} alt="" />
                </a>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <motion.a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      whileTap={{ scale: 0.95 }}
                    >
                      Home
                    </motion.a>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                            About Us
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none transition-transform",
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
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <motion.a
                      href="/causes"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      whileTap={{ scale: 0.95 }}
                    >
                      Causes
                    </motion.a>

                    <motion.a
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.a>
                  </div>

                  <div className="py-6">
                    <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setShowModal(true);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      whileTap={{ scale: 0.95 }}
                    >
                      Donate Now!
                    </motion.a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Donation Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[2147483647] p-4 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden my-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 px-8 py-12 text-white text-center relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-2xl hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
                <h2 className="text-4xl font-bold mb-2">Make a Difference</h2>
                <p className="text-lg opacity-95">
                  Choose how you'd like to support us
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  {[
                    {
                      name: "🇺🇸 USA Donations",
                      href: "https://give.team.org/give/672997/#!/donation/checkout",
                      color: "bg-[#3ea498] hover:bg-[#2d8276]",
                    },
                    {
                      name: "🇨🇦 Canada Donations",
                      href: "https://give.ca.team.org/give/673060/#!/donation/checkout",
                      color: "bg-cyan-600 hover:bg-cyan-700",
                    },
                    {
                      name: "🌍 Rest of the World",
                      href: "https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital",
                      color: "bg-orange-600 hover:bg-orange-700",
                    },
                  ].map((option) => (
                    <motion.a
                      key={option.name}
                      target="_blank"
                      rel="noreferrer"
                      href={option.href}
                      className={`block w-full py-4 px-6 text-center text-lg font-semibold text-white rounded-xl ${option.color} transition-all duration-200 shadow-md hover:shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.name}
                    </motion.a>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="text-center text-sm text-gray-600 pt-4 border-t">
                  <p>🔒 Secure donations · 100% transparent · Direct impact</p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-6 text-center border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                >
                  Maybe Later
                </button>
              </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </motion.header>
  );
}
