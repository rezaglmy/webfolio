import { AppConfig } from '@/utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '60' : '44';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center gap-4 text-xl text-gray-700 ${fontStyle}`}
    >
      <img src="/logo.png" width={size} height={size} alt="logo" />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
