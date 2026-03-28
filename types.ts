import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  tags: string[];
  purpose?: string;
  duration?: string;
  coreUsers?: string;
  description?: string;
  shortDescription?: string;
  tools?: string[];
}

export interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}