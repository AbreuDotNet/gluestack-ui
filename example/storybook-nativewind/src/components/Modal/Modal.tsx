import React from 'react';
import { Button, ButtonText } from '@/components/ui/Button';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/Modal';
import { Center } from '@/components/ui/Center';

import { X } from 'lucide-react-native';
import { Text } from '@/components/ui/Text';

const ModalBasic = (props: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <>
      <Button
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <ButtonText>Open Modal</ButtonText>
      </Button>
      <Modal
        {...props}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text>Are you absolutely sure?</Text>
            <ModalCloseButton>
              <X
                size={20}
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Text>
          </ModalBody>
          <ModalFooter className="gap-3">
            <Button
              variant="outline"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBasic;

export {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Text,
  Center,
};
