import dayjs from 'dayjs';

export const Footer = () => {
  return <footer>Copyright &copy; {dayjs().year()}</footer>;
};
