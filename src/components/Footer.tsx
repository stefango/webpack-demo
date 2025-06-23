import dayjs from 'dayjs';

interface FooterProps {
  visible: boolean;
}

export const Footer = ({ visible }: FooterProps) => {
  if (!visible) {
    return null;
  }
  return <footer>Copyright &copy; {dayjs().year()}</footer>;
};
