import React from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

export interface ParallaxProps {
  mousePos: MousePosition;
  factor: number;
  children?: React.ReactNode;
  className?: string;
}

export interface ProductSpecs {
  display: string;
  processor: string;
  camera: string;
  battery: string;
}

export interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  features: string[];
  description: string;
  specs: ProductSpecs;
}

export interface CartItem extends Product {
  quantity: number;
}