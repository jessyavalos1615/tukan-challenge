export interface ModalProps {
    title: string;
    shouldShow: boolean;
    disableSubmit: boolean;
    children: React.ReactNode;
    onClose: (e: any) => void;
    onSubmit: (e: any) => void;
}
