/* eslint-disable react/prop-types */

import { memo } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

const BaseModal = ({
  title,
  open,
  closeModal,
  toggleModal,
  children,
  confirm = false,
  handleConfirm,
  size,
}) => {
  return (
    <Dialog
      size={size}
      open={open}
      handler={toggleModal}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="pb-0">{title}</DialogHeader>
      {children && <DialogBody>{children}</DialogBody>}

      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={closeModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        {confirm && (
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default memo(BaseModal);
