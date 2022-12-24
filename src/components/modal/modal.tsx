import { Dialog, Transition } from "@headlessui/react";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Fragment, useState } from "react";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";

interface IButtonProps {
  name: string;
  slug: string;
}

const ButtonInsideModal = (props: IButtonProps): JSX.Element => {
  return (
    <>
      <section className="flex flex-1 justify-between px-2 items-center">
        <section className="flex justify-start items-center">
          <BiRightArrow className="text-black text-md" />
          <li className="text-darkshades-passive font-normal list-none text-lg">
            {props?.name}
          </li>
        </section>
        <section className="text-black text-md">
          <a href={`/docs/${props?.slug}`}>
            <IoOpenOutline />
          </a>
        </section>
      </section>
    </>
  );
};

const Modal: React.FC = (): JSX.Element => {
  const query = useStaticQuery(graphql`
    query MarkdownQuery {
      allMdx(sort: { frontmatter: { priority: ASC } }) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  const data = query?.allMdx.nodes;

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <section className="flex items-center justify-center p-4">
        <button
          type="button"
          onClick={openModal}
          className="m-2 px-2 py-1 text-2xl rounded font-medium text-white"
        >
          <AiFillCaretDown />
        </button>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="section" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <section className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <section className="fixed inset-0 overflow-y-auto">
            <section className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <section className="flex flex-1 justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium font-Plex leading-6 text-gray-900"
                    >
                      List of available docs
                    </Dialog.Title>
                    <section className="">
                      <button
                        type="button"
                        className="py-2 text-2xl text-darkshades-active"
                        onClick={closeModal}
                      >
                        <AiFillCloseCircle />
                      </button>
                    </section>
                  </section>
                  <section className="m-2">
                    <p className="bg-gray-500 h-0.5 w-full rounded-md" />
                  </section>
                  <section className="text-darkshades-active text-lg font-normal font-Plex">
                    {data.map((ele: any): JSX.Element => {
                      return (
                        <ButtonInsideModal
                          name={ele?.frontmatter?.title}
                          slug={ele?.frontmatter?.slug}
                        />
                      );
                    })}
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </section>
          </section>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
