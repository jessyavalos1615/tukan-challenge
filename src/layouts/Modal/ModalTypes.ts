export interface ModalProps {
    title: string;
    shouldShow: boolean;
    children: React.ReactNode;
    onClose: (e: any) => void;
}
