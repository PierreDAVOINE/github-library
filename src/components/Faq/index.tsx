import './styles.scss';
import { Message as MessageUI } from 'semantic-ui-react';

function Faq() {
  return (
    <MessageUI className="faq">
      <h2>FAQ</h2>
      <MessageUI.Header>A quoi ça sert ?</MessageUI.Header>
      <p>
        Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
      </p>
      <MessageUI.Header>Comment faire une recherche ?</MessageUI.Header>
      <p>
        Sur la page recherche, complétez le champ de recherche et valider la recherche.
      </p>
      <MessageUI.Header>Puis-je chercher n&apos;importe quel terme ?</MessageUI.Header>
      <p>
        Oui, c&apos;est fou.
      </p>
    </MessageUI>
  );
}

export default Faq;
