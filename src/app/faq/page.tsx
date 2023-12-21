import React from "react";
import Accordion from "../Components/Accordian";
import Wrapper from "../Components/Wrapper";
import Link from "next/link";

const questions = [
  {
    question: "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
    answer: "sinp is shopping brand.",
  },
  {
    question: "Donec mattis finibus elit ut tristique?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
  {
    question: "Vestibulum a lorem placerat, porttitor urna vel?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
  {
    question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
  {
    question: "Pellentesque habitant morbi tristique senectus et netus?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
  {
    question: "Nam pellentesque aliquam metus?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
  {
    question: "Morbi gravida, nisi id fringilla ultricies, elit lorem?",
    answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
  },
];
function Page() {
  return (
    <main className="min-h-screen flex flex-col w-full justify-center items-center text-pri_black mt-44 mb-10">
      <Wrapper className="max-w-[1200px] flex flex-col gap-y-10 px-5">
        <div className="w-full flex justify-center font-medium gap-x-2">
        <Link href={"/"} className="hover:text-orange-500">HOME</Link>/
        <p>FAQ</p>
        </div>
        <section className="w-full flex flex-col gap-y-4 mt-24">
          <h2 className="font-bold text-2xl ">
            Below Are Frequently Asked Questions, You May Find The Answer For
            Yourself
          </h2>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris
            semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor
            augue. In eget enim diam. Donec gravida tortor sem, ac fermentum
            nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat.
            Donec interdum nunc purus,
          </p>
        </section>
        <section className="w-full flex flex-col gap-y-4">
          {questions.map((question) => (
            <Accordion
              key={question.answer}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </section>
      </Wrapper>
    </main>
  );
}

export default Page;
