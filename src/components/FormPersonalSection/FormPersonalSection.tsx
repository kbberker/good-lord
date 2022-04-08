import { PersonalDetails } from '../../referenceTypes.types';

interface FormPersonalSectionProps {
  updatePersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>
}

function FormPersonalSection({ updatePersonalDetails }: FormPersonalSectionProps) {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'first-name') {
      updatePersonalDetails((prevDetails) => ({
        ...prevDetails,
        firstName: event.target.value,
      }));
    }
    if (event.target.id === 'last-name') {
      updatePersonalDetails((prevDetails) => ({
        ...prevDetails,
        lastName: event.target.value,
      }));
    }
    if (event.target.id === 'address') {
      updatePersonalDetails((prevDetails) => ({
        ...prevDetails,
        currentAddress: event.target.value,
      }));
    }
  };

  return (
    <section>
      <fieldset>
        <legend>Personal</legend>
        <label className="form--label" htmlFor="first-name">
          First name
          <input type="input" id="first-name" onChange={changeHandler} />
        </label>
        <label className="form--label" htmlFor="last-name">
          Last name
          <input type="input" id="last-name" onChange={changeHandler} />
        </label>
        <label className="form--label" htmlFor="address">
          Address
          <input type="input" id="address" onChange={changeHandler} />
        </label>
      </fieldset>
    </section>
  );
}

export default FormPersonalSection;
