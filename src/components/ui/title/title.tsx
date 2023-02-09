import { ReactNode } from 'react';

import { Typography } from '@alfalab/core-components/typography';

type PropsType = {
  /**
   * Контент
   */
  children: ReactNode;
};

const Title = ({ children }: PropsType) => {
  return (
    <Typography.TitleResponsive
      weight='bold'
      view='medium'
      tag='div'
      font='styrene'
      dataTestId='title'
    >
      {children}
    </Typography.TitleResponsive>
  );
};

export { Title };
