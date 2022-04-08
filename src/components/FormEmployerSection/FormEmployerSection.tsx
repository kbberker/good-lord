import React from 'react';
import { EmployerDetails } from '../../referenceTypes.types';

interface FormPersonalSectionProps {
  updateEmployerDetails: React.Dispatch<React.SetStateAction<EmployerDetails>>
}

function FormEmployerSection({ updateEmployerDetails }: FormPersonalSectionProps) {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'employer-name') {
      updateEmployerDetails((prevDetails) => ({
        ...prevDetails,
        name: event.target.value,
      }));
    }
    if (event.target.id === 'employment-start-date') {
      updateEmployerDetails((prevDetails) => ({
        ...prevDetails,
        startDate: event.target.value,
      }));
    }
    if (event.target.id === 'employment-end-date') {
      updateEmployerDetails((prevDetails) => ({
        ...prevDetails,
        endDate: event.target.value,
      }));
    }
  };

  return (
    <section>
      <fieldset>
        <legend>Employer</legend>
        <label htmlFor="employer-name">
          Employer name
          <input type="input" id="employer-name" onChange={changeHandler} />
        </label>
        <label htmlFor="employment-start-date">
          Employment start date
          <input type="input" id="employment-start-date" onChange={changeHandler} />
        </label>
        <label htmlFor="employment-end-date">
          Employment end date
          <input type="input" id="employment-end-date" onChange={changeHandler} />
        </label>
      </fieldset>
    </section>
  );
}

export default FormEmployerSection;
