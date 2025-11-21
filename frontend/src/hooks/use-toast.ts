import toastLib from "react-hot-toast";

function toast({ title, description }) {
  toastLib(`${title} - ${description}`);
}

function useToast() {
  return {
    toast,
    dismiss: toastLib.dismiss
  };
}

export { toast, useToast };
