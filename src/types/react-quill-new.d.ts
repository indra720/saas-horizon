declare module 'react-quill-new' {
  import { ComponentType } from 'react';
  import Quill from 'quill'; // Assuming 'quill' is installed and its types are available

  interface ReactQuillProps {
    theme?: string;
    value?: string;
    onChange?: (
      value: string,
      delta: any,
      source: string,
      editor: Quill.Editor
    ) => void;
    modules?: any;
    formats?: string[];
    bounds?: string | HTMLElement;
    placeholder?: string;
    readOnly?: boolean;
    // Add other props as needed
    className?: string; // Add className for basic styling
  }

  const ReactQuill: ComponentType<ReactQuillProps>;
  export default ReactQuill;
}
