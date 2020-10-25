import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { ICheckboxProps } from '../interfaces/mainInterfaces';


export const Checkbox: React.FC<ICheckboxProps> = ({ checked, updateCheck }) => (
  <button 
    onClick={() => updateCheck(!checked)}
    className={`flex p-1 rounded text-white relativecursor-pointer
      ${checked ? 'bg-indigo-800' : 'bg-indigo-200'}
    `}>
    <FaCheck />
  </button>     
);