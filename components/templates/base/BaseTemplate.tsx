import styles from './BaseTemplate.module.css';

export interface iBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<iBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
