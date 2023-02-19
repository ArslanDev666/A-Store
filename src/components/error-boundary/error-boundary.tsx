import React from 'react';
import { useRouteError } from 'react-router-dom';

import { Button } from '@alfalab/core-components/button';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

const ErrorBoundary = () => {
  const error = useRouteError();

  console.error(error);

  const handleReloadPageClick = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Typography.TitleResponsive view='large' tag='h2' font='styrene' weight='bold'>
        Возникла ошибка, Вы можете перезагрузить страницу и попробовать позже.
      </Typography.TitleResponsive>
      <Gap size='2xl' />
      <Button onClick={handleReloadPageClick}>Перезагрузить страницу</Button>
    </Container>
  );
};

export { ErrorBoundary };
