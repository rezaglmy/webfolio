import { AppConfig } from '@/utils/AppConfig';

type ILogoProps = {
  withTitle?: boolean;
  large?: boolean;
};

const Logo = ({ withTitle, large }: ILogoProps) => {
  const size = large ? '220' : '60';
  const fontStyle = large ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span
      className={`${
        withTitle && 'inline-flex items-center gap-4'
      } text-xl text-gray-700 ${fontStyle}`}
    >
      <img
        className="rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
        src="/logo.png"
        width={size}
        height={size}
        alt="logo"
      />

      {withTitle && AppConfig.full_name}
    </span>
  );
};

export { Logo };
