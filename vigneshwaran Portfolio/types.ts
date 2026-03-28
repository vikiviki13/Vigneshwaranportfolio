import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Mobile App' | 'Web Platform' | 'Redesign' | 'SaaS Platform' | 'E-commerce' | 'Client Project';
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  tags: string[];
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