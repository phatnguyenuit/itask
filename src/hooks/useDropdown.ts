import { useRef, useState, useCallback, useEffect } from 'react';

const useDropdown = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const prevShowRef = useRef(show);

  const handleToggle = useCallback(() => setShow((prev) => !prev), []);

  const handleOpen = useCallback(() => setShow(true), []);

  const handleClose = useCallback<(event: MouseEvent | TouchEvent) => void>(
    (e) => {
      if (anchorRef.current?.contains(e.target as Node)) {
        return;
      }
      setShow(false);
    },
    [],
  );

  useEffect(() => {
    if (anchorRef.current && prevShowRef.current === true && show === false) {
      anchorRef.current.focus();
    }
  }, [show]);

  return {
    anchorRef,
    show,
    handleToggle,
    handleOpen,
    handleClose,
  };
};

export default useDropdown;
