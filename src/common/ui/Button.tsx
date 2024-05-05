import className from 'classnames';

type ButtonType = 'primary' | 'default' | 'link';

type Props = {
  xl?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  children: string;
  onClick?: () => void;
};

const Button = ({
  children,
  type = 'default',
  disabled,
  xl,
  onClick,
}: Props) => {
  const btnClass = className({
    btn: true,
    'cursor-pointer': true,
    'btn-xl': xl,
    'btn-base': !xl,
    'btn-primary': type === 'primary',
    'btn-default': type === 'default',
    'btn-link': type === 'link',
  });

  return (
    <button className={btnClass} onClick={onClick} disabled={!!disabled}>
      {children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }

          .btn-default {
            @apply text-white bg-gray-500;
          }

          .btn-default:hover {
            @apply bg-gray-600;
          }

          .btn-link {
            @apply text-primary-500;
          }

          .btn-link:hover {
            @apply text-primary-600 underline;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
