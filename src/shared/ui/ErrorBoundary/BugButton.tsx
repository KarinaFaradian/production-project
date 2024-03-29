import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button/Button';

// Компонент для тестирования ошибок
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const throwError = () => { setError(true); };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error])

  return (
    <Button onClick={throwError}>
      {t('Throw error')}
    </Button>
  );
}
