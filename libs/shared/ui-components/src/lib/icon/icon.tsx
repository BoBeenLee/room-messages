import Menu from './svg/Menu';
import Person from './svg/Person';
import Back from './svg/Back';
import Search from './svg/Search';
import Send from './svg/Send';
import Upload from './svg/Upload';
import styles from './icon.module.css';
import AiOutlineLoading from '@react-icons/all-files/ai/AiOutlineLoading';
import AiOutlineClose from '@react-icons/all-files/ai/AiOutlineClose';

export const reactIcons = {
  loading: AiOutlineLoading.AiOutlineLoading,
  close: AiOutlineClose.AiOutlineClose,
};

type ReactType = keyof typeof reactIcons;

export const svgIcons = {
  menu: Menu,
  person: Person,
  back: Back,
  search: Search,
  send: Send,
  upload: Upload,
} as const;

type SvgType = keyof typeof svgIcons;

type IconType = SvgType | ReactType;

export interface IconProps {
  className?: string;
  color?: string;
  name: IconType;
}

const isReactIconType = (name: IconType): name is ReactType => {
  if (name in reactIcons) {
    return true;
  }
  return false;
};

export function Icon(props: IconProps) {
  const { className, color, name } = props;
  if (isReactIconType(name)) {
    const TargetComponent = reactIcons[name];
    return (
      <div className={className}>
        <TargetComponent className={styles['icon']} color={color} />
      </div>
    );
  }
  const TargetComponent = svgIcons[name];
  return (
    <div className={className}>
      <TargetComponent className={styles['icon']} color={color} />
    </div>
  );
}

export default Icon;
