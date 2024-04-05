import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Text,
  AlertDialogFooter,
  AlertDialogCloseButton,
} from '../../../core-components/themed';
import { Heading } from '../../../core-components/themed/heading';
import { OverlayProvider } from '@gluestack-ui/overlay';

import { X } from 'lucide-react-native';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <OverlayProvider>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="lg">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading>Return Policy</Heading>
            <AlertDialogCloseButton>
              <X size={20} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>Whoa, slow down there!</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              size="xs"
              variant="outline"
              action="secondary"
              onPress={handleClose}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="xs" action="negative" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </OverlayProvider>
  );
};

export default AlertDialogDemo;
