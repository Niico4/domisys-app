'use client';
import React, { useEffect, useState } from 'react';

import { steps } from '../(landing)/constants/constants';

const StepperOrderState = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep === steps.length - 1) {
          return 0;
        }
        return prevStep + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <ol className="flex items-center w-full mb-4">
      {steps.map(({ icon: Icon }, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <li
            key={index}
            className={`flex items-center opacity-90 ${
              index !== steps.length - 1
                ? "w-full after:content-[''] after:w-full after:h-1 after:inline-block"
                : ''
            } ${
              isCompleted ? 'after:bg-primary-gradient' : 'after:bg-gray-300/20'
            }`}
          >
            <div
              className={`flex items-center justify-center shrink-0 size-16 rounded-full  ${
                isActive
                  ? 'bg-primary-gradient text-gray-100'
                  : isCompleted
                    ? 'bg-primary-gradient text-gray-100'
                    : 'bg-gray-300/20 text-gray-300/50'
              }`}
            >
              <Icon size={40} stroke={1.5} />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default StepperOrderState;
