import './styles.scss';
import { Message as MessageUI } from 'semantic-ui-react';

function NotFound() {
  return (
    <MessageUI negative>
      <MessageUI.Header>404 : Oups ! Vous vous êtes visiblement perdu...</MessageUI.Header>
    </MessageUI>
  );
}

export default NotFound;
