import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <h1 className={classNames(cls.pageError_Title, {}, [className])}>{t('Something is wrong')}</h1>
      <Button theme={ThemeButton.BRIGHT} className={classNames(cls.pageError_Button, {}, [className])} onClick={reloadPage}>
        {t('Reload')}
      </Button>
    </div>
  );
}
