import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

export interface ComparisonItem {
  target: string;
  solution: string;
}

export enum MethodologyMode {
  EXECUTE = 'EXECUTE',
  EVOLVE = 'EVOLVE'
}