export interface PersonalDetails {
  firstName: string;
  lastName: string;
  currentAddress: string;
}

export interface EmployerDetails {
  name: string;
  startDate: string;
  endDate: string;
}

export interface ReferencingFormData {
  personal: PersonalDetails,
  employer: EmployerDetails[]
}
