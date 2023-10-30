import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fas,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
);

const dice: { [key: number]: string } = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
} as const;

const Die = ({ pip }: { pip: number }) => {
  const icon = useMemo<IconName>(() => {
    return `fa-dice-${dice[pip]}`;
  }, [pip]);

  return (
    // ${rolling && 'Die-shaking'}
    <FontAwesomeIcon icon={icon} className={`text-slate-400 w-16 h-16`} />
  );
};

export default Die;
