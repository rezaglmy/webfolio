import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalProjectRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  link?: string;
};

const VerticalProjectRow = (props: IVerticalProjectRowProps) => {
  const verticalProjectClass = className(
    'pt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalProjectClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        {props.link && (
          <span className="text-md font-semibold text-gray-700">
            <a
              href={
                props.link.includes('http')
                  ? props.link
                  : `https://${props.link}`
              }
              target="_blank"
              className="group"
            >
              {props.link}
              <span className="text-gray-550 mr-3 inline-block font-normal transition duration-100 ease-in group-hover:text-gray-700">
                ↗
              </span>
            </a>
          </span>
        )}
      </div>

      <div className="relative w-full p-6 sm:w-1/2">
        <img
          src={`${router.basePath}/assets/images/laptop.png`}
          alt={props.imageAlt}
        />
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="absolute left-[16%] top-[15%] h-[65%] w-[68%] object-fill md:left-[14%] md:top-[12.6%] md:h-[70%] md:w-[72%]"
        />
      </div>
    </div>
  );
};

export { VerticalProjectRow };
