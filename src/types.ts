export interface ProgramItem {
  id: string;
  category: 'languages' | 'academic';
  title: string;
  subTitleEn?: string;
  badge?: string;
  description: string;
  highlights: string[];
  priceTag: string;
  durationNote?: string;
  targetAudience: string;
  certification?: string;
}

export interface ContactInfo {
  academyNameAr: string;
  academyNameEn: string;
  slogan: string;
  locationName: string;
  locationFull: string;
  cityState: string;
  phones: string[];
  email: string;
  startDateCampaign: string;
  academicYear: string;
  priceOffer: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email?: string;
  programType: string;
  studyLevel: string;
  preferredTiming: string;
  notes?: string;
}
