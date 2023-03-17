import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('loader', {}, [className])}>
      <div className="loadingio-spinner-ball-st3mtu9cwh"><div className="ldio-ahvsgvi0uwa">
        <div></div>
      </div></div>
    </div>
  );
}
