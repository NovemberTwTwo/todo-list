import { ReactNode, useContext } from 'react';
import { RouterStateContext } from '../../core/context/RouterContext';

interface RouteProps {
  children: ReactNode;
  url: string;
}

const Route = ({ children, url }: RouteProps) => {
  const sessionStateUrl = useContext(RouterStateContext);

  return <>{url === sessionStateUrl && children}</>;
};

export default Route;
