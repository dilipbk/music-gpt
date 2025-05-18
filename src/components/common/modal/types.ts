export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  hasDismiss?: boolean;
  disableOutside?: boolean;
  bodyClasses?: string;
}
