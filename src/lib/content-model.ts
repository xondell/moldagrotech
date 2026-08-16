export type LocalizedText = { ro: string; ru: string; en: string };

export type TeamMember = {
  id: string;
  fullName: string;
  role: LocalizedText;
  bio: LocalizedText;
  photoUrl?: string;
  linkedinUrl?: string;
  email?: string;
  published: boolean;
};

export type Partner = {
  id: string;
  name: string;
  category: "equipment" | "iot" | "research" | "institution" | "technology" | "association" | "other";
  logoUrl?: string;
  websiteUrl?: string;
  verified: boolean;
  published: boolean;
};

export type CaseStudy = {
  id: string;
  slug: string;
  customer?: string;
  location?: string;
  agriculturalType?: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  technologies: string[];
  verifiedResults: LocalizedText[];
  imageUrls: string[];
  published: boolean;
};

export type ProjectMapPoint = {
  id: string;
  label: LocalizedText;
  regionOnly: boolean;
  latitude?: number;
  longitude?: number;
  permissionToPublishExactLocation: boolean;
};
