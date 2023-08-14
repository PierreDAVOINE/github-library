import './styles.scss';
import { Message as MessageUI } from 'semantic-ui-react';

interface MessageProps {
  nbFound: number
}

function Message({ nbFound } : MessageProps) {
  return (
    <div className="message">
      <MessageUI size="large">{nbFound ? `La recherche à donné ${nbFound} résultats` : ''}</MessageUI>
    </div>
  );
}

export default Message;
