"use client"
import { useState } from 'react';

type AccordionProps = {
  question: string;
  answer: string;
};

const Accordion = ({ question , answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className='w-full  border-[1px] border-gray-200 p-2 text-pri_black'>
        <button onClick={toggleIsOpen} className='flex justify-between group  p-4 w-full'>
        <p className='group-hover:text-orange-500 font-medium tracking-wider'>{question}</p>
        <p className="focus:outline-none group-hover:text-orange-500 font-medium">{isOpen ? "-" : "+"}</p>
        </button>

      <div className={`grid overflow-hidden  transition-all ease-in duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'opacity-0 grid-rows-[0fr]'}`}>
        <div className='overflow-hidden'>
        <p className='p-3 pl-10 text-sm '>{answer}</p>

        </div>
      </div>
    </div>
  );
};

export default Accordion;
