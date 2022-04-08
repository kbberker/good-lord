import React, { useState } from 'react';
import { EmployerDetails, PersonalDetails, ReferencingFormData } from '../../referenceTypes.types';
import FormEmployerSection from '../FormEmployerSection/FormEmployerSection';
import FormPersonalSection from '../FormPersonalSection/FormPersonalSection';

function ReferenceForm() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    {
      firstName: '',
      lastName: '',
      currentAddress: '',
    },
  );
  const [employerDetails, setEmployerDetails] = useState<EmployerDetails>({
    name: '',
    startDate: '',
    endDate: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData: ReferencingFormData = {
      personal: personalDetails,
      employer: [employerDetails],
    };

    fetch('https://ref-api.goodlord.co/reference/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="reference-form">
      <FormPersonalSection updatePersonalDetails={setPersonalDetails} />
      <FormEmployerSection updateEmployerDetails={setEmployerDetails} />
      <section className="form--button-section">
        <button type="button">cancel</button>
        <button type="submit">Submit</button>
      </section>
    </form>

  );
}

export default ReferenceForm;
